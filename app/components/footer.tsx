'use client'

import Link from 'next/link'

export default function Footer() {
  return (
    <footer className="bg-gray-800 text-gray-200 py-8">
      <div className="container mx-auto px-8 grid grid-cols-1 md:grid-cols-3 gap-8">
        {/* About */}
        {/* <div>
          <h2 className="text-lg font-semibold mb-2">About</h2>
          <p className="text-sm">
            ShopEase is your go-to marketplace for quality products delivered fast.
          </p>
        </div> */}

        {/* Address */}
        <div>
          <h2 className="text-lg font-semibold mb-2">Address</h2>
          <address className="not-italic text-sm">
            123 Main St.Hlaing, Yangon ,Myanmar
          </address>
        </div>

        {/* Social Links */}
        <div>
          <h2 className="text-lg font-semibold mb-2">Connect with us</h2>
          <div className="flex space-x-4 text-sm">
            <Link href="#" className="hover:underline" passHref>
              Telegram
            </Link>
            <Link href="#" className="hover:underline" passHref>
              Facebook
            </Link>
            <Link href="#" className="hover:underline" passHref>
              YouTube
            </Link>
            <Link href="#" className="hover:underline" passHref>
              X
            </Link>
          </div>
        </div>
      </div>

      {/* Copyright */}
      <div className="mt-8 border-t border-gray-700 pt-4 text-center text-sm">
        &copy; {new Date().getFullYear()} ShopEase. All rights reserved.
      </div>
    </footer>
  )
}

