import React, { FC, useState, useEffect, useRef, useCallback } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import cn from 'classnames'
import { useSelector } from 'react-redux'
import { Socket } from 'socket.io-client'
import { socket } from '../utils/socket'
import { v4 as uuidV4 } from 'uuid'
import { getAuth } from 'firebase/auth'
import app from 'firebase-config'
import { Customer, ChatState, GlobalState } from 'data1'
import p1 from '../public/assets/profile/p1.jpg'

interface Message {
  id: string
  socketid?: string
  name: string
  msg: string
}

type Props = {
  message: Message
  socketClient?: Socket
}

// Component to render each message
const ChatMessage: FC<Props> = ({ message, socketClient }) => {
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
  // Connecting to socket instance
  // const newSocket = io(url)
  // Init socket io
  // const socket: Socket = useSelector((state: ChatState) => state.socket)
  const { customer, loggedIn } = useSelector(
    (state: GlobalState) => state.customers
  )
  const [message, setMessage] = useState('')
  const [chats, setChats] = useState<Message[]>([])
  const [chatLoading, setChatLoading] = useState<boolean>(false)
  // const [socket, setSocket] = useState<Socket>(socketCon)
  const [isTyping, setTyping] = useState(false)
  const [someoneTyping, setSomeoneTyping] = useState(false)
  const chatWindow = useRef<HTMLDivElement>(null)
  const dummyDiv = useRef<HTMLDivElement>(null)
  const [user, setUser] = useState<Customer>()

  // Functon to move the scrollbar at the bottom when new msg has been sent
  const moveScroll = () => {
    dummyDiv.current?.scrollIntoView({ behavior: 'smooth' })
  }

  // Function to fetch user
  // const fetchUser = () => {
  //   Promise.resolve(getAuth(app))
  //     .then(({ currentUser }) => {
  //       if (currentUser) {
  //         const id = currentUser.uid
  //         const name = currentUser.displayName || 'Anonymous'
  //         const profilePic = currentUser.photoURL || p1
  //         const email = currentUser.email || ''

  //         const user: Customer = { id, name, email, profilePic }
  //         // console.log(user)
  //         setUser(user)
  //       }
  //     })
  //     .catch((err) => console.log(`Error occurred ${err}`))
  // }

  // Function to request for a chat
  const onChatRequest = () => {
    socket.emit('chat-request', customer)
  }

  // Function to send the message to admin
  const onMessageSend = () => {
    if (!message) {
      console.log('fill up the fields u moron')
    } else if (!loggedIn) {
      console.log('you should be logged in first')
    } else if (!socket) {
      console.log('Socket connection is not established yet')
    } else {
      const clientMsg: Message = {
        id: uuidV4(),
        socketid: socket?.id,
        name: customer?.name || '',
        msg: message,
      }
      setChats([...chats, clientMsg])
      socket?.emit('user-msg', clientMsg)
      setMessage('')
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
      setTyping(false)
      onMessageSend()
    }
  }

  // Callback to check typing state of another user repeatedly
  const onTypingCallback = useCallback(() => {
    socket?.on('show-typing', (state) => setSomeoneTyping(state?.typing))
  }, [someoneTyping])

  useEffect(() => {
    // setSocket(socket)
    // Checking network logs
    // Fetch user details
    console.log(socket)
    // fetchUser()
    socket?.on('connect', () => console.log('Connected to server'))
    socket?.on('error', (reason) => console.log(reason))
    socket?.on('connect_failed', (reason) => console.log(reason))
    socket?.on('server-msg', (res) => {
      console.log(res)
      setChats((prevMsg) => [...prevMsg, res])
      moveScroll()
    })
    onTypingCallback()
    socket.on('on-waiting', (isLoading) => setChatLoading(isLoading))
    // Disconnecting from socket instance
    return () => {
      socket?.disconnect()
    }
  }, [chatLoading])

  useEffect(() => {
    // Emit an typing event when user is typing
    isTyping
      ? socket?.emit('user-typing', { typing: true })
      : socket?.emit('user-typing', { typing: false })
  }, [isTyping])

  return (
    <div className="relative h-screen overflow-hidden w-full">
      {/* Sidebar */}
      {/* <div className="sticky w-1/4 bg-gray-200 top-0 left-0 bottom-0 h-full flex-1">
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
      </div> */}
      {/* Chat box */}
      <div ref={chatWindow} className="px-8 pt-2 overflow-auto pb-16">
        <Link href="/">
          <a className="group py-1 flex items-center">
            <i className="material-icons transform transition rotate-180 duration-300 group-hover:rotate-0">
              chevron_left
            </i>
            <span className="text-lg">Back</span>
          </a>
        </Link>
        {/* Chat ground */}
        <div className="relative flex-grow w-full">
          <div className="flex flex-col items-center w-full justify-center pt-20">
            <h3 className="text-4xl text-gray-600">No Recent chats yet</h3>
            {chatLoading ? (
              <p className="text-lg text-gray-500">Loading...</p>
            ) : (
              <button
                onClick={onChatRequest}
                className="px-3 py-2 bg-gray-800 text-white mt-4 hover:bg-gray-700 rounded-md"
              >
                Request for a chat
              </button>
            )}
          </div>
          {socket &&
            chats?.map((chat) => (
              <ChatMessage
                key={chat?.socketid}
                message={chat}
                socketClient={socket}
              />
            ))}
          {someoneTyping && (
            <div className="p-2 max-w-xl sm:max-w-sm mb-2 rounded-md bg-gray-200">
              Typing...
            </div>
          )}
          {/* Dummy div to be focused when new message will arrive (for auto scroll feature) */}
          <div ref={dummyDiv} className="h-8"></div>
        </div>
      </div>
      {/* Input message field */}
      <div className="fixed bg-white bottom-0 border-t-2 w-full border-accent flex items-center justify-between py-9 px-8 left-1/6 right-0 h-11">
        <div className="flex items-center">
          <i className="material-icons mr-4">message</i>
          <input
            type="text"
            name="client-msg"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            onKeyUp={(e) => sendWithKeyboard(e.key)}
            className="border-0"
            placeholder="Type your queries here..."
          />
        </div>
        <div className="flex items-center">
          <button className="mr-2" onClick={() => onMessageSend()}>
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
