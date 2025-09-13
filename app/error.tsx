// app/error.tsx
'use client'

import { useEffect } from 'react'
import Link from 'next/link'

interface ErrorProps {
  error: Error
  reset: () => void
}

export default function GlobalError({ error, reset }: ErrorProps) {
  useEffect(() => {
    console.error('Unhandled error:', error)
  }, [error])

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-50 p-6">
      <h1 className="text-5xl font-bold text-red-600 mb-4">Something went wrong</h1>
      <p className="text-gray-700 mb-6">
        {error.message || 'An unexpected error occurred.'}
      </p>
      <div className="flex space-x-4">
        <button
          onClick={() => reset()}
          className="px-5 py-2 bg-yellow-500 text-white rounded-md hover:bg-yellow-600 transition"
        >
          Try Again
        </button>
        <Link href="/">
          <button className="px-5 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition">
            Go Home
          </button>
        </Link>
      </div>
    </div>
  )
}
