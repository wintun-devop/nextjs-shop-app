'use client';

import Image from "next/image";
import Header from "../components/header";


export default function Home() {
  return (
    <div className="min-h-screen bg-background">
      <Header logoSrc="/logo.png" siteName="ShopEase" cartCount={5} />
    </div>
  );
}