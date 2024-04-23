import { BookOpenText } from 'lucide-react'
import React from 'react'
import { Button } from './ui/button'
import ModeToggle from './ModeToggle'
import Link from 'next/link'

function Navbar() {
  return (
    <div>


        <div className='container max-w-4xl mx-auto
        flex justify-between items-center p-4'>

            {/* Logo */}
            <div>

            <BookOpenText  className='text-blue-600 w-10 h-10'/>

            </div>
            {/* dark and buttn */}
            <div className='flex space-x-5 items-center'>

                {/* button */}
                <div >

                    <Link href='/sign-in'>
                    <Button className='dark:text-white
                    hover:bg-blue-800 '>Sign-In</Button>
                    </Link>

                </div>
                {/* darkmode */}

                <ModeToggle/>
            </div>
        </div>
      
    </div>
  )
}

export default Navbar
