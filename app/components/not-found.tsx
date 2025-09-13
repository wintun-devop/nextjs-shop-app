// components/NotFound.tsx
'use client'

import Link from 'next/link'

interface NotFoundProps {
  title?: string
  message?: string
  buttonText?: string
}

export default function NotFound({
  title = '404 — Page Not Found',
  message = 'Sorry, we couldn’t find that page.',
  buttonText = 'Go Home',
}: NotFoundProps) {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-50 p-6">
      <h1 className="text-5xl font-bold text-gray-800 mb-4">{title}</h1>
      <p className="text-lg text-gray-600 mb-6">{message}</p>
      <Link href="/">
        <button className="px-6 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition">
          {buttonText}
        </button>
      </Link>
    </div>
  )
}
