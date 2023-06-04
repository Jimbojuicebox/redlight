import { AiOutlineClose } from 'react-icons/ai'
import Link from 'next/link'

const NavMenu = ({ setOpenMenu }) => {

    return (
        <div className='bg-white/50 fixed top-0 left-0 w-full h-full z-10'>
            <div className='bg-red-700 fixed top-6 right-6 min-w-[50%] z-20 rounded-3xl p-8'>
                <div className='text-white text-4xl flex flex-end right-2 pt-2 pr-2 pl-auto cursor-pointer' onClick={() => setOpenMenu(false)}>
                    <AiOutlineClose />
                </div>

                <div>
                    <div className='text-white pt-8 text-2xl' onClick={() => setOpenMenu(false)}>
                        <Link href='/'>
                            - Home
                        </Link>
                    </div>

                    <div className='text-white pt-8 text-2xl' onClick={() => setOpenMenu(false)}>
                        <Link href='/defi'>
                            - Defi
                        </Link>
                    </div>

                    <div className='text-white pt-8 text-2xl' onClick={() => setOpenMenu(false)}>
                        <Link href='/gaming'>
                            - Gaming
                        </Link>
                    </div>

                    <div className='text-white pt-8 text-2xl' onClick={() => setOpenMenu(false)}>
                        <Link href='/exchange'>
                            - Utility
                        </Link>
                    </div>

                    <div className='text-white pt-8 text-xl' onClick={() => setOpenMenu(false)}>
                        <Link href='/pinnacle-staking'>
                            - Staking Calculator
                        </Link>
                    </div>

                    <div className='text-white pt-8 text-xl' onClick={() => setOpenMenu(false)}>
                        <Link href='/faq'>
                            - FAQ
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default NavMenu