"use client";

import { Fragment } from "react";
import { signOut, useSession } from "next-auth/react";
import Link from "next/link";
import Image from "next/image";
import { Menu, Transition } from "@headlessui/react";
import { UserIcon, ChevronDownIcon } from "@heroicons/react/24/outline";

export function UserDropdown() {
  const { data: session, status } = useSession();
  const isLoading = status === "loading";
  
  if (isLoading) {
    return (
      <div className="h-8 w-8 rounded-full bg-neutral-200 dark:bg-neutral-700 animate-pulse"></div>
    );
  }
  
  if (!session?.user) {
    return (
      <Link
        href="/api/auth/signin"
        className="px-4 py-2 rounded-md bg-purple-600 text-white hover:bg-purple-700 transition-colors"
      >
        Login with osu!
      </Link>
    );
  }
  
  return (
    <Menu as="div" className="relative inline-block text-left">
      <Menu.Button className="flex items-center space-x-2 rounded-full p-1 hover:bg-neutral-100 dark:hover:bg-neutral-800 transition-colors">
        {session.user.avatar_url ? (
          <Image
            src={session.user.avatar_url}
            alt={session.user.username}
            width={32}
            height={32}
            className="rounded-full"
          />
        ) : (
          <div className="w-8 h-8 rounded-full bg-purple-600 flex items-center justify-center">
            <UserIcon className="w-4 h-4 text-white" />
          </div>
        )}
        <span className="font-medium hidden md:block">{session.user.username}</span>
        <ChevronDownIcon className="w-4 h-4" />
      </Menu.Button>
      
      <Transition
        as={Fragment}
        enter="transition ease-out duration-100"
        enterFrom="transform opacity-0 scale-95"
        enterTo="transform opacity-100 scale-100"
        leave="transition ease-in duration-75"
        leaveFrom="transform opacity-100 scale-100"
        leaveTo="transform opacity-0 scale-95"
      >
        <Menu.Items className="absolute right-0 mt-2 w-48 origin-top-right rounded-md bg-white dark:bg-neutral-800 shadow-lg ring-1 ring-black/5 dark:ring-white/10 focus:outline-none z-50">
          <div className="px-1 py-1">
            <Menu.Item>
              {({ active }) => (
                <Link
                  href="/my-requests"
                  className={`${
                    active ? 'bg-neutral-100 dark:bg-neutral-700' : ''
                  } group flex w-full items-center rounded-md px-2 py-2 text-sm`}
                >
                  My Requests
                </Link>
              )}
            </Menu.Item>
            
            {session.user.is_admin && (
              <Menu.Item>
                {({ active }) => (
                  <Link
                    href="/admin"
                    className={`${
                      active ? 'bg-neutral-100 dark:bg-neutral-700' : ''
                    } group flex w-full items-center rounded-md px-2 py-2 text-sm`}
                  >
                    Admin Dashboard
                  </Link>
                )}
              </Menu.Item>
            )}
            
            <Menu.Item>
              {({ active }) => (
                <button
                  onClick={() => signOut({ callbackUrl: '/' })}
                  className={`${
                    active ? 'bg-neutral-100 dark:bg-neutral-700' : ''
                  } group flex w-full items-center rounded-md px-2 py-2 text-sm text-red-600 dark:text-red-400`}
                >
                  Sign Out
                </button>
              )}
            </Menu.Item>
          </div>
        </Menu.Items>
      </Transition>
    </Menu>
  );
}