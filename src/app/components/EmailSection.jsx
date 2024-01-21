"use client"
import React from 'react'
import GuithubIcon from '../../../public/Github_icon.png'
import LinkedinIcon from '../../../public/Linkedin_icon.png'
import Link from 'next/link'
import Image from 'next/image'

const EmailSection = () => {
  
  return (
    <section className=' grid md:grid-cols-2 my-12 md:my-12 py-12 gap-4 relative' id='connect'>
      <div className=' bg-gradient-to-l from-purple-900 to-transparent rounded-full h-60 w-60 z-0 blur-lg absolute top-1/2 -left-4 tranform -translate-x-1/2 translate-y-1/2 '></div>
      <div>
        <h5 className=' text-xl font-bold text-white my-2'>Let's&apos; Connect</h5>
        <p className=' text-[#ADB7BE] mb-4 max-w-md'>
             
             I'm currently looking for new opportunities,&apos; my inbox is always open.
             whether you have a question&apos; or just want to say hi,I'll try my best
             to get back to you as soon as possible.
        </p>
        <div className=' socials flex flex-row gap-2 md:gap-4'>
        <Link href="https://github.com">
                <Image style={{ backgroundColor: 'white', borderRadius: '0.2rem', width: '2.5rem', height: '2.5rem' }} src={GuithubIcon} alt='Github Icon'/>
            </Link>
            <Link href="linkedin.com">
                <Image className=' bg-white rounded-sm w-10 md:w-16' src={LinkedinIcon} alt='Linkedin Icon'/>
            </Link>
        </div>
      </div>

      <div>
      <form className=' flex flex-col gap-6'>

          <div>
          <label htmlFor="email" className=' text-white block mb-2 text-sm font-medium'>Your Email</label>
            <input name='email' type="email" id='email' required className='bg-[#18191E] border border-[#6d77a9] placeholder-[#9CA2A9] 
            text-gray-100 text-sm  rounded-lg block w-full p-2.5' placeholder='jacob@gmail.com' />
          </div>

           <div>
            <label htmlFor="subject" className=' text-white block mb-2 text-sm font-medium'>Subject</label>
            <input name='subject' type="text" id='subject' required className='bg-[#18191E] border border-[#6d77a9] placeholder-[#9CA2A9] 
            text-gray-100 text-sm  rounded-lg block w-full p-2.5' placeholder='Just Saying hi!' />
           </div>

           <div>
            <label htmlFor="message" className=' text-white block mb-2 text-sm font-medium'>Message</label>
            <textarea className='bg-[#18191E] border border-[#6d77a9] placeholder-[#9CA2A9] 
            text-gray-100 text-sm  rounded-lg block w-full p-2.5' name="message" id="message" placeholder='Lets talk about.....' ></textarea>
           </div>
           <button 
           type='submit'
           className=' bg-purple-500 hover:bg-purple-600 text-white font-medium py-2.5 px-5 rounded-lg w-full'>
              Send Message
           </button>
        </form>
      </div>
    </section>
  )
}

export default EmailSection
