'use client';

import Image from "next/image";
import Header from "../components/header";
import Footer from "../components/footer";



export default function Home() {
  return (
    // <div className="min-h-screen bg-background">
    <div className="flex flex-col min-h-screen">
      <Header logoSrc="/logo.png" siteName="ShopEase" cartCount={5} />
      <main className="flex-grow bg-background">
        {/* your home content */}
      </main>
      <Footer />
    </div>

  );
}