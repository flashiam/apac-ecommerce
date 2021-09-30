import React, { FC, useState, useEffect } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { Layout, UserNav } from '@components/common'
import SidebarLayout from '@components/common/SidebarLayout'
import testImg from '../public/assets/test_avatar.jpg'
import socketClient from 'socket.io-client'
import cn from 'classnames'

const url = 'http://localhost:3030'
const socket = socketClient(url)

interface Message {
  id: string
  name: string
  msg: string
}

type Props = {
  message: Message
}

// Component to render each message
const ChatMessage: FC<Props> = ({ message }) => {
  const { id, msg } = message

  // Function to check user
  // const isClient = () => id?.slice(id.length - 2, id.length) === 'cl'

  return (
    <div
      className={cn('flex w-full mb-1', {
        'justify-end': id === socket.id,
      })}
    >
      <div
        className={cn('p-2 max-w-xl sm:max-w-sm mb-2 rounded-md', {
          'bg-purple-200': id === socket.id,
          'bg-gray-200': id !== socket.id,
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

  useEffect(() => {
    socket.on('chat-msg', (res) => setChats([...chats, res]))
  }, [socket])

  // Function to send the message to admin
  const onMessageSend = async (name: string, msg: string) => {
    if (msg !== '') {
      const clientMsg: Message = {
        id: socket.id,
        name,
        msg,
      }
      await socket.emit('client-msg', clientMsg)
      setMessage('')
    }
    console.log('fill up the fields u moron')
  }

  return (
    <div className="relative h-screen flex">
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
      <div className="px-8 py-2 w-4/5">
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
            <ChatMessage key={chat.id} message={chat} />
          ))}
        </div>
      </div>
      {/* Input message field */}
      <div
        className="fixed bottom-0 border-t-2 w-full border-accent flex items-center justify-between py-9 px-8 left-1/6 right-0 h-11"
        style={{ left: '20%' }}
      >
        <div className="flex items-center" style={{ width: '70%' }}>
          <i className="material-icons mr-4">message</i>
          <input
            type="text"
            name="client-msg"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            onKeyUp={(e) => e.key === 'Enter' && onMessageSend('Tony', message)}
            className="w-4/5 border-0"
            placeholder="Type your queries here..."
          />
        </div>
        <div className="flex items-center" style={{ width: '28%' }}>
          <button
            className="mr-2"
            onClick={() => onMessageSend('Abhishek', message)}
          >
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
