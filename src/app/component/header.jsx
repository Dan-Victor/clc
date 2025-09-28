'use client'
import React from 'react'
import Image from 'next/image'
import Link from 'next/link';
import { usePathname } from 'next/navigation';
const header = () => {
    const pathname = usePathname();
    const navLinks = [
        { name: 'About', href: '/about' },
        { name: 'Programs', href: '/program' },
        { name: 'Advocacy', href: '/advocacy' },
        { name: 'Contact', href: '/contact' },
    ];
  return (
    <header className="font-mont fixed z-1000 bg-[#F5F5F5] w-[100vw] mx-auto text-[#3360A0] flex py-5 justify-between items-center px-15 ">
      <Link href='/'><Image src='/cclclogo.svg' alt='CCLC Logo' width={160} height={64} className=''/></Link>
      <nav>
        <ul className='flex gap-10 text-lg font-medium'>
            {navLinks.map((link,index)=>(
               <Link key={index} href={link.href} className={pathname === link.href ? 'text-[#4165bb] font-bold' : ''}>
                <li className='hover:text-[#3a6de5]'>{link.name}</li>
               </Link>
            ))}
        </ul>
      </nav>
      <div  className='flex justify-center items-center gap-6'>
        <div>
            <button className=''>En</button>
            <button className=''>Fr</button>
        </div>
        <div className='flex gap-2.5'>
        <button className='cursor-pointer py-3 px-3.5 border-[#0F4082] hover:bg-[#0f4082] hover:text-white border-[1px] rounded-2xl font-medium text-lg'>Get Involved</button>
        <button className=' cursor-pointer text-white py-3 px-3 rounded-2xl hover:bg-[#a57d45] bg-[#AD8E63]'>Donate</button>
        </div>
      </div>
    </header>
  )
}

export default header