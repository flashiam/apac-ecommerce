import React, { FC, useState } from 'react'
import Link from 'next/link'
import ClickOutside from '@lib/click-outside/click-outside'
import cn from 'classnames'
import s from './Notification.module.css'

interface Props {
  color?: string
}

const Notification: FC<Props> = ({ color }) => {
  const [active, setActive] = useState(false)

  return (
    <ClickOutside active={active} onClick={() => setActive(false)}>
      <div className="relative">
        <button
          className="relative focus:outline-none"
          onClick={() => setActive((prev) => !prev)}
        >
          <i className="material-icons-outlined text-3xl">notifications</i>
          <span
            className={cn(
              'absolute flex justify-center items-center h-5 w-5 rounded-full bg-gray-600 -top-1 -right-1 text-xs text-white',
              color
            )}
          >
            1
          </span>
        </button>
        {active && (
          <div className={cn(s.notificationTab, 'absolute bg-white')}>
            <div>
              <h3 className="px-6 pt-4">Today</h3>
              <ul>
                {[1, 2].map((num) => (
                  <li key={num}>
                    <div>
                      <Link href="/">
                        <a
                          className={cn(
                            s.notifLink,
                            'relative inline-block border-b-2 border-accent-2 border-gray-400 px-10 text-sm',
                            {
                              'font-semibold': num === 1,
                            }
                          )}
                        >
                          Lorem ipsum dolor sit amet consectetur adipisicing
                          elit. Praesentium, deleniti.
                          {/* <span className="absolute h-2 w-2 rounded-full bg-gray-700 left-2 top-5"></span> */}
                          <div className="pt-1">
                            <p className="text-right text-accent-3 text-xs font-normal">
                              40 min ago
                            </p>
                          </div>
                        </a>
                      </Link>
                    </div>
                  </li>
                ))}
              </ul>
            </div>
            <Link href="/">
              <a
                className={cn(
                  s.notifLink,
                  'text-center',
                  'block w-full py-3 font-normal'
                )}
              >
                See All
              </a>
            </Link>
          </div>
        )}
      </div>
    </ClickOutside>
  )
}

export default Notification
