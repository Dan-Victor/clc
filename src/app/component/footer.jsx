import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import Email from "../component/email"

const footer = () => {
    const SocialLinks =[
        {img:'/facebook.svg', href:'https://www.facebook.com' , alt:'facebook'},
         {img:'/twitter.svg', href:'https://www.twitter.com' , alt:'twitter'},
          {img:'/instagram.svg', href:'https://www.instagram.com' , alt:'instagram'},
           {img:'/youtube.svg', href:'https://www.youtube.com' , alt:'youtube'},
    ]
  return (
    <section className='w-full'>
       <div className=' w-full font-mont grid bg-white text-[#4B5564] mx-auto h-auto py-[72px] px-[40px]  gap-6 sm:grid-cols-1 md:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-4 mt-8 '>
        <div className='w-[347px] h-auto '>
         <Image src='/cclclogo.svg' alt='logo' width={188} height={64}/>
         <p className='pt-6 h-auto'>Empowering the next generation of leaders to create positive change in their communities and beyond. Join thousands of youth making a difference across Canada</p>
        </div>
        <div className=' w-[203px] h-auto'>
            <h1 className='font-semibold text-[#0F4082] text-[18px]'>Programs</h1>
            <ul className="pt-4 flex flex-col gap-4">
            <li>Leadership Development</li>
            <li>Innovation Lab</li>
            <li>Cultural Exchange</li>
            <li>Youth Empowerment</li>
            <li>Social Enterprise</li>
            </ul>
        </div>
        <div className='w-[158px] h-auto'>
            <h1 className='font-semibold text-[#0F4082] text-[18px]'>Resource</h1>
            <ul className="pt-4 flex flex-col gap-4">
                <li>Program Guide</li>
                <li>Application Process</li>
                <li>Mentor Network</li>
                <li>Success Stories</li>
                <li>Research & Report</li>
            </ul>
        </div>
        <div className='w-[131px] h-auto'>
            <h1 className='font-semibold text-[#0F4082] text-[18px]'>Support</h1>
            <ul className="pt-4 flex flex-col gap-4">
                <li>Contact Us</li>
                <li>FAQ</li>
                <li>Help Center</li>
                <li>Privacy Policy</li>
                <li>Terms of Service</li>
            </ul>
        </div>
        <div className='w-[348px] h-auto'>
            <h1 className='font-semibold text-[#0F4082] text-[18px]'>Stay Connected</h1>
            <p className='pt-4'>Get updates on new programs success stories, and opportunities to make an impact</p>
            <form className='pt-4 flex relative'>
            <input type='email' placeholder='Enter your email' className='pl-2 pr-8 py-2.5 border-l border-y border-[#D1D5DB] rounded-l-lg ' />
            <button type='submit' className='text-white bg-[#AD8E63] py-2.5 px-3.5 rounded-r-lg  '>Subscribe</button>
            </form>
           
                    </div>
                    <div className='w-[348px] h-auto'>
                        <h1 className='font-semibold text-[#0F4082] pt-4 text-[18px]'>Get in Touch</h1>
           <p className='pt-4 flex gap-[12px] justify-start items-center'><Image src='/sms.svg' width={24} height={24}  alt="sms"/>hello@youthlead.ca</p>
           <p className='pt-4 flex gap-[12px] justify-start items-center'><Image src='/call.svg' width={24} height={24} alt="sms"/>1-800-YOUTH-LEAD</p>
           <p className='pt-4 flex gap-[12px] justify-start items-center'><Image src='/location.svg' width={24} height={24} alt="sms"/>Offices across Canada</p>
                    </div>
       </div>
       <hr className='  bg-[#E5E7EB] h-[1px] mb-[50px]'/>
       <div className='flex flex-wrap justify-between items-center gap-4 px-6 pb-[60px]'>
       <p className='text-[#4B5564]'>© 2025 YouthLead. All rights reserved. Empowering youth since 2020.</p>
       <div>
       {
        SocialLinks.map((link,idx)=>(

            <Link key={idx} href={link.href} target="_blank" rel="noopener noreferrer" className='inline-block mr-3'><Image src={link.img} width={36} height={36} alt={link.alt}/></Link>
        ))
       }
       </div>
       </div>
   </section>
  )
}

export default footer