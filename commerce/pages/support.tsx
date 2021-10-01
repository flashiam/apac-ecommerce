import React, { FC, useState, useEffect, useRef } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import testImg from '../public/assets/test_avatar.jpg'
import cn from 'classnames'
import { io, Socket } from 'socket.io-client'

const url = 'http://localhost:8000'

interface Message {
  id: string
  socketid?: string
  name: string
  msg: string
}

type Props = {
  message: Message
  socket?: Socket
}

// Component to render each message
const ChatMessage: FC<Props> = ({ message, socket }) => {
  const { id, msg } = message

  return (
    <div
      className={cn('flex w-full mb-1', {
        'justify-end': id === socket?.id,
      })}
    >
      <div
        className={cn('p-2 max-w-xl sm:max-w-sm mb-2 rounded-md', {
          'bg-purple-200': id === socket?.id,
          'bg-gray-200': id !== socket?.id,
        })}
      >
        {msg}
      </div>
    </div>
  )
}

const Support = () => {
  const [message, setMessage] = useState('')
  const [chats, setChats] = useState<Message[]>([])
  const [socket, setSocket] = useState<Socket>()
  const [isTyping, setTyping] = useState(false)
  const chatWindow = useRef<HTMLDivElement>(null)
  const dummyDiv = useRef<HTMLDivElement>(null)

  // Functon to move the scrollbar at the bottom when new msg has been sent
  const moveScroll = () => {
    dummyDiv.current?.scrollIntoView({ behavior: 'smooth' })
  }

  // Function to send the message to admin
  const onMessageSend = (name: string) => {
    if (!message) {
      console.log('fill up the fields u moron')
    } else if (socket) {
      const clientMsg: Message = {
        id: socket?.id,
        name,
        msg: message,
      }
      socket?.emit('user-msg', clientMsg)
      setMessage('')
    } else {
      console.log('Socket connection is not established yet')
    }
  }

  const onTypingTimeout = () => {
    setTyping(false)
  }

  // Function to send through keyboard events
  const sendWithKeyboard = (currentKey: string) => {
    if (currentKey !== 'Enter') {
      let timeout
      if (isTyping === false) {
        // Started typing
        setTyping(true)
        timeout = setTimeout(onTypingTimeout, 5000)
      } else {
        // Typed another word instantly before 5 sec
        clearTimeout(timeout)
        timeout = setTimeout(onTypingTimeout, 5000)
      }
    } else {
      // Send the message
      onMessageSend('Abhishek')
    }
  }

  useEffect(() => {
    // Connecting to socket instance
    const newSocket = io(url)
    setSocket(newSocket)

    // Checking network logs
    newSocket.on('connect', () => console.log('Connected to server'))
    newSocket.on('error', (reason) => console.log(reason))
    newSocket.on('connect_failed', (reason) => console.log(reason))
    newSocket.on('server-msg', (res) => {
      setChats((prevMsg) => [...prevMsg, res])
      moveScroll()
    })
    // Disconnecting from socket instance
    return () => {
      newSocket.disconnect()
    }
  }, [])

  useEffect(() => {
    // Emit an typing event when user is typing
  }, [isTyping])

  return (
    <div className="relative h-screen flex overflow-hidden">
      {/* Sidebar */}
      <div className="sticky w-1/4 bg-gray-200 top-0 left-0 bottom-0 h-full flex-1">
        <h3 className="text-center font-semibold text-2xl py-2">
          Chat Support
        </h3>
        <ul className="mt-5">
          {[1, 2, 3, 4].map((num) => (
            <li
              key={num}
              className="py-3 px-8 hover:bg-white cursor-pointer border-b-2 border-accent-2"
            >
              <div className="flex items-center space-x-2">
                <div className="h-10 w-10">
                  <Image
                    height="100%"
                    width="100%"
                    src={testImg}
                    className="rounded-full object-cover"
                  />
                </div>
                <div>
                  <h4 className="font-bold text-md">John Doe</h4>
                  <p className="text-sm text-gray-600">Senior Manager</p>
                </div>
              </div>
            </li>
          ))}
        </ul>
      </div>
      {/* Chat box */}
      <div ref={chatWindow} className="px-8 pt-2 w-4/5 overflow-auto pb-16">
        <Link href="/">
          <a className="group py-1 flex items-center">
            <i className="material-icons transform transition rotate-180 duration-300 group-hover:rotate-0">
              chevron_left
            </i>
            <span className="text-lg">Back</span>
          </a>
        </Link>
        {/* Chat ground */}
        <div className="relative flex-grow">
          {chats?.map((chat) => (
            <ChatMessage key={chat?.socketid} message={chat} socket={socket} />
          ))}
          {/* Dummy div to be focused when new message will arrive (for auto scroll feature) */}
          <div ref={dummyDiv} className="h-8"></div>
        </div>
      </div>
      {/* Input message field */}
      <div
        className="fixed bg-white bottom-0 border-t-2 w-full border-accent flex items-center justify-between py-9 px-8 left-1/6 right-0 h-11"
        style={{ left: '20%' }}
      >
        <div className="flex items-center" style={{ width: '70%' }}>
          <i className="material-icons mr-4">message</i>
          <input
            type="text"
            name="client-msg"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            onKeyUp={(e) => sendWithKeyboard(e.key)}
            className="w-4/5 border-0"
            placeholder="Type your queries here..."
          />
        </div>
        <div className="flex items-center" style={{ width: '28%' }}>
          <button className="mr-2" onClick={() => onMessageSend('Abhishek')}>
            <i className="material-icons rounded-btn h-12 w-12 bg-purple-500 text-white text-md">
              send
            </i>
          </button>
          <button>
            <i className="material-icons rounded-btn h-12 w-12 bg-gray-300 text-black text-md">
              attach_file
            </i>
          </button>
        </div>
      </div>
    </div>
  )
}

export default Support
