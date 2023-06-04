"use client"

import { useState } from 'react'
import { Inter } from 'next/font/google'
import { ThirdwebProvider, metamaskWallet } from "@thirdweb-dev/react"
import { RedlightChain } from "@thirdweb-dev/chains"

import './globals.css'

import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer';

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
    title: 'Redlight Directory',
    keywords: ['Redlight', 'Blockchain', 'crypto', 'gasless', 'gas free', 'zero gas', 'next gen'],
    description: 'Listing everything on the Redlight Network, the only truly gasless blockchain.',
    icons: [
        {
            rel: 'icon',
            url: '/favicon.ico'
        }
    ]
}

const RootLayout = ({ children }) => {
    const [openMenu, setOpenMenu] = useState(false);

    return (
        <ThirdwebProvider supportedWallets={[metamaskWallet()]} activeChain={RedlightChain}>
            <html lang="en">
                <body className={inter.className}>
                    <Navbar openMenu={openMenu} setOpenMenu={setOpenMenu} />
                        <div className='main'>
                            {children}
                        </div>
                    <Footer />
                </body>
            </html>
        </ThirdwebProvider>
    )
}

export default RootLayout