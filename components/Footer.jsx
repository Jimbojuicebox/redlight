import Link from 'next/link'
import Image from 'next/image'
import { SiDiscord, SiCoinmarketcap } from 'react-icons/si'
import { FaTwitter } from 'react-icons/fa'

const Footer = () => {
  return (
    <div className='bg-red-700 text-white mt-16'>
        <div className='main flex justify-between flex-wrap p-5 pt-8'>
            <div className='px-8 pb-6'>
                <Image src='/assets/redlightnetwork.png' width={190} height={46} alt='Redlight network logo' quality={100} />
                <p className='py-4 text-sm'>
                    Revolutionizing the Digital Landscape.
                </p>
            </div>

            <div className='flex flex-col px-8 pb-8'>
                <h4 className='font-semibold'>Quick Links</h4>
                <Link href='https://www.redlight.network/' target='_blank' className='text-sm pt-2'>Redlight Homepage</Link>
                <Link href='https://www.redlight.network/news' target='_blank' className='text-sm pt-2'>Redlight News</Link>
                <div className='flex flex-row pt-2 gap-4 text-2xl'>
                    <Link href='https://discord.com/invite/redlightfinance' target='_blank'><SiDiscord /></Link>
                    <Link href='https://twitter.com/redlight' target='_blank'><FaTwitter /></Link>
                    <Link href='https://coinmarketcap.com/currencies/redlight-chain/' target='_blank'><SiCoinmarketcap /></Link>
                </div>
            </div>

            <div className='px-8'>
                <h4 className='font-semibold'>Notes</h4>
                <p className='text-sm pt-2'>This site is regularly updated</p>
                <p className='text-sm pt-2'>If you find any bad links, errors,</p>
                <p className='text-sm'>or to provide details for a project:</p>
                <p className='text-sm pt-2'>Email - <Link href='mailto:info@redlightdirectory.net'>info@redlightdirectory.net</Link></p>
            </div>
        </div>

        <div className='flex-center gap-4 py-3 px-8 text-sm flex-wrap'>
            <div>
                <p>
                    &copy; All rights reserved by REDLIGHT NETWORK 2022
                </p>
            </div>
            <div>
                <p className='hidden md:block'>-</p>
            </div>
            <div>
                <p>
                    Redlight Directory by <Link href='https://jamesforeman.info' target='_blank'>jamesforeman.info</Link> 2023
                </p>
            </div>
        </div>
    </div>
  )
}

export default Footer