"use client"

import { Inter } from 'next/font/google'
import { ThirdwebProvider, metamaskWallet } from "@thirdweb-dev/react"
import { RedlightChain } from "@thirdweb-dev/chains"

import './globals.css'

import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer';

const inter = Inter({ subsets: ['latin'] })

const RootLayout = ({ children }) => {

    return (
        <ThirdwebProvider supportedWallets={[metamaskWallet()]} activeChain={RedlightChain}>
            <html lang="en">
                <body className={inter.className}>
                    <Navbar />
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