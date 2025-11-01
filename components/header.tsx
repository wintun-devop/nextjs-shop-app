// components/Header.tsx
'use client'

import { useState, FC } from 'react'
import Link from 'next/link'

interface HeaderProps {
  logoSrc?: string
  siteName?: string
  cartCount?: number
}

const Header: FC<HeaderProps> = ({
  logoSrc = '/logo.png',
  siteName = 'ShopEase',
  cartCount = 0,
}) => {
  const [mobileSearchOpen, setMobileSearchOpen] = useState(false)

  return (
    <header className="bg-white shadow">
      <nav className="px-4 py-2 flex items-center justify-between">
        {/* Logo */}
        <Link href="/" className="flex items-center">
          <img src={logoSrc} alt="Logo" className="h-8 w-auto" />
          <span className="ml-2 text-xl font-semibold">{siteName}</span>
        </Link>

        {/* Desktop Search */}
        <form
          action="/search"
          method="GET"
          className="hidden md:flex flex-1 mx-4 max-w-lg"
        >
          <input
            type="text"
            name="q"
            placeholder="Search products..."
            className="flex-1 border border-gray-300 rounded-l-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          <button
            type="submit"
            className="bg-blue-500 hover:bg-blue-600 text-white px-4 rounded-r-lg"
          >
            Search
          </button>
        </form>

        {/* Mobile Search Toggle */}
        <button
          onClick={() => setMobileSearchOpen(open => !open)}
          className="md:hidden p-2 text-gray-600 hover:text-gray-800 focus:outline-none"
          aria-label="Toggle search"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M8 4a4 4 0 014 4m0 0a4 4 0 100 8 4 4 0 010-8zm8 12l-4-4"
            />
          </svg>
        </button>

        {/* Icons */}
        <div className="flex items-center space-x-4">
          <Link href="/user" className="text-gray-600 hover:text-gray-800">
            {/* User Icon */}
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M5.121 17.804A13.937 13.937 0 0112 15c2.386 0 4.637.654 6.879 1.804M15 11a3 3 0 11-6 0 3 3 0 016 0z"
              />
            </svg>
          </Link>

          <Link href="/cart" className="relative text-gray-600 hover:text-gray-800">
            {/* Cart Icon */}
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2 9m12-9l2 9m-6-4h.01"
              />
            </svg>
            {cartCount > 0 && (
              <span className="absolute -top-1 -right-2 bg-red-500 text-white text-xs rounded-full px-1">
                {cartCount}
              </span>
            )}
          </Link>

          <Link href="/orders" className="text-gray-600 hover:text-gray-800">
            {/* Orders Icon */}
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a3 3 0 116 0M9 5v4h6V5"
              />
            </svg>
          </Link>

          <Link href="/delivery-status" className="text-gray-600 hover:text-gray-800">
            {/* Delivery Icon */}
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M9 17v-6h13v6M5 17v-6h4v6m0 0H5m0 0v2m4-2v2m0 0h6m6 0h-6"
              />
            </svg>
          </Link>
        </div>
      </nav>

      {/* Mobile Search Box */}
      {mobileSearchOpen && (
        <div className="px-4 pb-2 md:hidden">
          <form action="/search" method="GET" className="flex space-x-2">
            <input
              type="text"
              name="q"
              placeholder="Search products..."
              className="flex-1 border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            <button
              type="submit"
              className="bg-blue-500 hover:bg-blue-600 text-white px-4 rounded"
            >
              Go
            </button>
          </form>
        </div>
      )}
    </header>
  )
}

export default Header
