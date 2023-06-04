"use client"

import { useState, useEffect } from 'react'
import Link from "next/link"
import Image from "next/image"
import { usePathname } from 'next/navigation'
import { useMetamask, useDisconnect, useAddress, useBalance } from "@thirdweb-dev/react"
import { NATIVE_TOKEN_ADDRESS } from "@thirdweb-dev/sdk"
import { GiHamburgerMenu } from 'react-icons/gi'

import NavMenu from './NavMenu'


const Navbar = () => {

    const [openMenu, setOpenMenu] = useState(false)
    const connectWithMetamask = useMetamask()
    const disconnect = useDisconnect()
    const pathname = usePathname()

    const address = useAddress();
    const balanceQuery = useBalance(NATIVE_TOKEN_ADDRESS);

    const [balance, setBalance] = useState(0);

    useEffect(() => {
        const fetchBalance = () => {
        if (typeof balanceQuery.data?.displayValue === "undefined") {
            setBalance(0);
        } else {
            const tokenBalance = balanceQuery.data.displayValue;
            setBalance(parseInt(tokenBalance));
        }
        };
        fetchBalance();
    }, [address, balanceQuery]);

    console.log(balance);


    return (
        <nav className='w-full bg-red-700'>
            <div className='main flex-between mb-16 pt-4 pb-4'>
                <Link href='/' className='flex gap-2 flex-center'>                   
                    <Image 
                        src='/assets/redlightlogo.png' 
                        width={182} 
                        height={43}
                        quality={100} 
                        alt='Redlight Logo' 
                        className='hidden sm:flex'
                    /> 
                    <Image 
                        src='/assets/redlightlogos.png' 
                        width={46} 
                        height={43}
                        quality={100} 
                        alt='Redlight Logo' 
                        className='sm:hidden'
                    />                    
                </Link>

                <div className='md:flex hidden'>
                    <div className='flex gap-8 align-middle'>
                        {pathname === '/defi' &&
                            <Link href='/defi' className='text-white font-semibold'>
                                DEFI
                            </Link> 
                            ||
                            <Link href='/defi' className='text-white'>
                                defi
                            </Link>
                        }

                        {pathname === '/gaming' &&
                            <Link href='/gaming' className='text-white font-bold'>
                                GAMING
                            </Link> 
                            ||
                            <Link href='/gaming' className='text-white'>
                                gaming
                            </Link>
                        }

                        {pathname === '/exchange' &&
                            <Link href='/exchange' className='text-white font-semibold'>
                                UTILITY
                            </Link> 
                            ||
                            <Link href='/exchange' className='text-white'>
                                utility
                            </Link>
                        }
                    </div>          
                </div>

                <div className='flex'>
                    <button 
                        className='connectbtn' 
                        onClick={() => {
                            if (address) {
                                disconnect()
                            } else {
                                connectWithMetamask()
                            }
                        }}
                    >
                        {address ? `${address.slice(0, 4)}...${address.slice(-4)}` : 'Connect'}
                    </button> 

                    <div
                        onClick={() => { setOpenMenu(true)}} 
                        className='text-4xl pl-3 text-white cursor-pointer'
                    >
                        <GiHamburgerMenu />
                    </div> 
                </div>  
            </div>
            

            {openMenu && <NavMenu setOpenMenu={setOpenMenu} />}
        </nav>
    )
}

export default Navbar