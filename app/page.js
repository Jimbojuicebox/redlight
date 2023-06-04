import Image from "next/image"
import Link from "next/link"

export default function Home() {
  return (
    <main>
      <div className='flex-between gap-4 mt-6 py-2 px-6 w-full rounded-xl bg-gradient-to-r from-red-200 via-white to-red-200'>
        <Image src='/assets/redlc.png' alt='Robot reading directory' width={30} height={30} quality={100} />
        <Link href='/pinnacle-staking'>
          Pinnacle Staking Calculator <span className='text-red-700 font-semibold'>here</span>
        </Link>
        <Image src='/assets/redlc.png' alt='Robot reading directory' width={30} height={30} quality={100} />
      </div>

      <div className='flex-between flex-col md:flex-row gap-6 pt-12'>
        <div className='basis-0 shrink grow'>
          <h2 className='text-3xl'>
            Welcome to the <span className='text-red-700'>Redlight</span> Directory
          </h2>
          <p className='pt-4'>
            To get started pick a <span className='font-semibold'>category</span> from the top menu!
          </p>
          <p className='pt-2'>
            The purpose of this site is to create a listing of available projects and useful information on the Redlight Blockchain.  
            Redlight is at an exciting stage in it's development and things are just being set in motion to allow the onboarding and 
            continued expansion of the ecosystem.
          </p>
          <p className='pt-2'>
            As new collaborations and projects built on Redlight are released we will endeavour to add any relevant information in 
            our database.
          </p>
        </div>
        <div className='basis-0 shrink grow'>
          <div className='rounded-3xl overflow-hidden'>
            <Image src='/assets/robored.png' alt='Robot reading directory' width={542} height={302} quality={100} />
          </div>
        </div>
      </div>

      <div className='flex-between flex-col lg:flex-row gap-4 mt-12 py-2 px-6 w-full rounded-3xl bg-gradient-to-r from-red-200 via-white to-red-200'>
        <div className='p-4 basis-0 shrink grow'>
          <h2 className='text-2xl'>
            Setting up <span className='text-red-700'>Redlight</span>
          </h2>
          <p className='pt-4'>
            Redlight is a layer 1 EVM (Ethereum Virtual Machine) compatible blockchain. Unlike popular layer 2 solutions (think Polygon, IMX, Arbitrum etc) it has no reliance
            on the Ethereum network and is completely independant. Being EVM compatible allows easier bridging and compatibility of token standards across all EVM networks.
          </p>
          <p className='pt-4'>
            Add the Redlight network to your MetaMask using these details.
          </p>
        </div>

        <div className='p-4 basis-0 shrink grow'>
          <h4 className='text-xl font-medium'>
            Redlight Network Details:
          </h4>
          <p className='pt-4'>
            <span className='font-medium'>Network Name:</span>  Redlight Chain
          </p>
          <p className='pt-4'>
            <span className='font-medium'>ChainID:</span>  2611
          </p>
          <p className='pt-4'>
            <span className='font-medium'>Symbol:</span>  REDLC
          </p>
          <p className='pt-4'>
            <span className='font-medium'>RPC URL:</span>  https://dataseed2.redlightscan.finance
          </p>
          <p className='pt-4'>
            <span className='font-medium'>Explorer:</span>  https://redlightscan.finance
          </p>
          <p className='pt-4'>
          Grab MetaMask from <Link href='https://metamask.io/' target='_blank'><span className='text-red-700 font-medium'>metamask.io</span></Link>
          </p>
          <p className='pt-4 items-baseline'>
          <span className='font-medium'>USDT-r:</span>  <span className='text-sm break-all'>0x73E84bFD35C3f1537A72180D1481E1eABf64B70b</span>
          </p>
        </div>
      </div>

      <div className='pt-12'>
        <div className='main w-2/3 sm:w-1/2 videocontainer'>
          <iframe 
            width="100%" 
            height="100%" 
            src="https://www.youtube.com/embed/NneyRsVlPP4" 
            title="YouTube video player" 
            frameBorder="0" 
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
            allowFullScreen>
          </iframe>
        </div>
      </div>

    </main>
  )
}
