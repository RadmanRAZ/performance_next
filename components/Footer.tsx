
import Link from 'next/link'
import React from 'react'

const Footer = () => {
  return (
    <footer className='text-white-800 flex-between text-sm w-full gap-y-10 border-t border-black-400 bg-black-100 px-20 py-1 max-md:flex-col'>
      <p>Copyright all right reserverd</p>
      <div className='flex gap-x-9'>
        <Link href='/terms-of-use' >Terms and conditions</Link>
        <Link href='/privacy-policy' >privacy policy</Link>
      </div>
    </footer>
  )
}

export default Footer