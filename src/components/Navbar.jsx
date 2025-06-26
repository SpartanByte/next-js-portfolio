'use client'
import { navbarData, copyRightIcon } from '@/assets'

const Navbar = ({ id }) => {
    return(
        <><div className="w-[70px] h-full fixed left-0 top-0 flex flex-col justify-between border-r border-gray-200 px-4 py-10 xl:py-6 z-10">
            <a href="/#home">
                <span className="text-3xl font-semibold text-red-400">Home</span>.
            </a>
            <div className="flex flex-col gap-y-3 xl:gap-y-1 sm:gap-y-2 xs:gap-y-0">
                {/* navData will go here */}
            </div>
        </div>
        <div>
            {/* Fix parent element that is needed. This shouldn't be wrapped in a JSX element */}
            <p className="flex items-center justify-center text-[13px] xs:text-[11px] text-gray-500 mt-6">
                <span className="absolute left-1/2 w-max flex items-center -rotate-90 origin-bottom-left tracking-wider dark:text-gray-200 transition-colors">
                    {copyRightIcon} 2025 - {new Date().getFullYear()}
                </span>
            </p>
        </div></>
    );
}

export default Navbar