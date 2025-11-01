'use client'

import Link from 'next/link'
import { companyData } from '@/app/constants/company-data';

export default function Footer() {
  const year = new Date().getFullYear();
  return (
     <footer className="bg-gray-200 border-no border-border mt-16">
      <div className="container mx-auto px-4 py-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <h3 className="font-bold text-foreground mb-4 font-[family-name:var(--font-space-grotesk)]">{companyData.companyTitle}</h3>
            <p className="text-muted-foreground text-sm">
              Your trusted partner for electronics and industrial equipment.
            </p>
          </div>
          {/* <div>
            <h4 className="font-semibold text-foreground mb-4">Categories</h4>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li>Industrial Equipment</li>
              <li>Electronic Parts</li>
              <li>Electrical & Mechanical</li>
              <li>Consumer Products</li>
            </ul>
          </div> */}
          <div>
            <h4 className="font-semibold text-foreground mb-4">Support</h4>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li>Contact Us</li>
              <li>Track Order</li>
              <li>Returns</li>
              <li>FAQ</li>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold text-foreground mb-4">Contact</h4>
            <div className="space-y-2 text-sm text-muted-foreground">
              <p>(+95) {companyData.companyContactPhone1}</p>
              <p>{companyData.companyInfoEmail}</p>
            </div>
          </div>
        </div>
        <div className="border-t border-border mt-8 pt-8 text-center text-sm text-muted-foreground">
          <p>&copy; {year} {companyData.companyTitle}. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}

