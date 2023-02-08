import React from 'react'

const Nav = () => {
    return (
        <div>
            <nav class="bg-white border-gray-200 px-2 sm:px-4 py-2.5 rounded dark:bg-gray-900 border-b border-green-800 dark:border-gray-600 mb-7 drop-shadow-xl">
            <div class="container flex flex-wrap items-center justify-between mx-auto">                    
            <span class="self-center text-xl font-semibold whitespace-nowrap dark:text-white">The<span class='text-green-800'>Cocktail</span>DB</span>
                <div class="inline items-center p-2 ml-3 text-sm text-gray-500 rounded-lg md:hidden focus:outline-none focus:ring-2 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600">
                <span className='text-black'>Home </span>
                <span className='text-black'> About</span>
                </div>
                <div class="hidden w-full md:block md:w-auto" id="navbar-default">
                </div>
            </div>
            </nav>
        </div>
    )
}

export default Nav;