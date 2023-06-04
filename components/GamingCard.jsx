import Image from 'next/image'
import Link from 'next/link'

import { SiDiscord, SiCoinmarketcap } from 'react-icons/si'
import { FaTwitter, FaLongArrowAltRight } from 'react-icons/fa'
import { MdAppShortcut } from 'react-icons/md'

const GamingCard = ({ data }) => {
  return (
    <div className='flex-between flex-col md:flex-row gap-4 mt-12 py-6 px-6 w-full rounded-3xl bg-gradient-to-r from-red-200 via-white to-red-200'>
        <div className='projpic'>
            <Image 
                src={data.image}
                width={300}
                height={150}
                alt={data.name}
                quality={100}
            />
        </div>
        <div className='flex flex-col'>
            <div className='flex justify-center md:justify-start'>
                <h3 className='text-3xl'>
                    {data.name}
                </h3>
            </div>

            <p className='text-center md:text-left'>
                {data.description}
            </p>

            <div className='flex justify-center md:justify-start flex-wrap'>
                {data.button &&
                    <Link href={data.url} target='_blank'>
                        <button className='text-white flex m-1 py-1 px-4 bg-red-700 rounded-xl'>{data.button}<span className='arrowup'><FaLongArrowAltRight /></span></button>
                    </Link>
                }
                {data.comingsoon &&
                    <h3 className='text-xl font-medium text-red-700 p-2'>Coming Soon!</h3>
                }
                <div className='flex gap-4 text-2xl text-red-700 p-2'>
                    {data.dapp &&
                        <Link 
                            href={data.dapp} 
                            target='_blank'
                        >
                            <MdAppShortcut />
                        </Link>
                    }
                    {data.discord &&
                        <Link 
                            href={data.discord} 
                            target='_blank'
                        >
                            <SiDiscord />
                        </Link>
                    }
                    {data.twitter &&
                        <Link 
                            href={data.twitter} 
                            target='_blank'
                        >
                            <FaTwitter />
                        </Link>
                    }
                    {data.coinmarketcap &&
                        <Link 
                            href={data.coinmarketcap} 
                            target='_blank'
                        >
                            <SiCoinmarketcap />
                        </Link>
                    }
                </div>
            </div>
        </div>
    </div>
  )
}

export default GamingCard