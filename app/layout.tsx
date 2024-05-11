"use client";
import 'material-symbols/rounded.css'
import Script from "next/script";
import './globals.scss'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import Image from 'next/image'
import { useState } from 'react'
import Header from './header';
import { QueryClient, QueryClientProvider } from 'react-query';

const inter = Inter({ subsets: ['latin'] })

const metadata: Metadata = {
  title: 'Shawarma sultan',
  description: 'Shawarma sultan is a mobile kabab van',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  // Create a query client
  const queryClient = new QueryClient();

  const [showSideMenu, setShowSideMenu] = useState<boolean>(false);

  const showSideMenuHandler = () => {
    setShowSideMenu(true);
  }

  const hideSideMenuHandler = () => {
    setShowSideMenu(false);
  }

  return (
    <QueryClientProvider client={queryClient}>
      <html lang="en">
        <head>
          <Script
            src="https://ajax.googleapis.com/ajax/libs/jquery/3.7.1/jquery.min.js"
            strategy="beforeInteractive"
          />
        </head>

        <body className={`${inter.className} 'text-[#343434]'`}>
          <Header showSideMenuHandler={showSideMenuHandler} />

          {children}

          <div
            className={`w-screen h-screen bg-black/[30%] top-0 z-10	${showSideMenu ? 'fixed' : 'hidden'}`}
            onClick={hideSideMenuHandler}
          />
          <div className={`fixed top-0 left-0 h-screen w-4/5 bg-white divide-solid divide-[#f04637] divide-y-2 transition-all duration-[750ms] z-10 ${showSideMenu ? 'translate-x-[0]' : 'translate-x-[-100%]'}`}>
            <div className='flex justify-between items-center py-4 px-3'>
              <Image
                src="/assets/images/shawarma-sultan-logo-text.png"
                alt="Shawarma Sultan Logo"
                width="175"
                height="25"
                className='object-contain'
              />
              <button className='w-fit' onClick={hideSideMenuHandler}>
                <span className="material-symbols-rounded">close</span>
              </button>
            </div>
            <ul className='py-4 px-3 flex flex-col gap-4 font-semibold'>
              <li><a href="/">HOME</a></li>
              <li><a href="/menu">MENU</a></li>
              <li><a href="/pop-up-locations">POP UP LOCATIONS</a></li>
              <li><a href="/food-on-wheels">FOOD ON WHEELS</a></li>
              <li><a href="/about-us">ABOUT US</a></li>
            </ul>
          </div>
        </body>
      </html>
    </QueryClientProvider>
  )
}
