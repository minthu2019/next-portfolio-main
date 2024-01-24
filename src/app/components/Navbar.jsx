"use client";
import Link from 'next/link'
import React from 'react'
import { useState } from 'react';
import NavLink from './NavlLink'
import MenuOverlay from './MenuOverlay';
import {AiOutlineMenu, AiOutlineClose} from "react-icons/ai"


const navLink =[
  
  {
    title : "Home",
    path : " #home"
  },{
    title : "About",
    path : " #about"
  },
  {
    title : "Projects",
    path : " #projects"
  },{
    title : "Connect",
    path : " #connect"
  },
  
  
]

const Navbar = () => {

  const [navbaropen , setNavbaropen] = useState(false);
  const [menuOverlay , setmenuOverlay] = useState('block');


  const handelClick = () => {
    setNavbaropen(!navbaropen)
    setmenuOverlay('block')
   
  }
  
  const menuOverlayClick = () => {
    setmenuOverlay('hidden')
    setNavbaropen(!navbaropen)
  }

  return (
    <nav className=' max-w-[1440px] mx-auto fixed top-0 left-0 right-0 z-10 bg-gradient-to-r from-orange-500 to-transparent bg-opacity-100 '>
      <div className=' flex flex-wrap items-center justify-between mx-auto py-4 px-8
      '> 
        <Link href={"/"}  className=' text-2xl md:text-5xl text-white font-semibold'> MINTHU</Link>
        <div  onClick={handelClick} className='block md:hidden'>
          {
            navbaropen ? (
             <div>
               <button className=' flex item-center px-3 py-2 border rounded border-slate-200
             hover:text-white hover:border-white text-slate-200'>
              <AiOutlineClose className=' w-5 h-5 '/>
              </button>
             </div>
            ) : (
              <button className=' flex item-center px-3 py-2 border rounded
               border-slate-200 hover:text-white hover:border-white text-slate-200'>
                <AiOutlineMenu  className=' w-5 h-5 '/>
              </button>          
            )
          }
        </div>
        <div className=' hidden md:block md:w-auto id="navbar"'>
            <ul className='flex md:flex-row md:space-x-8 mt-0 '>
                {
                  navLink.map((link, index)=>(
                    <li key={index}>
                      <NavLink href={link.path} title={link.title} />
                    </li>
                  ))
                }
            </ul>
        </div>
      </div>
      {navbaropen ? (
        <MenuOverlay onclick={menuOverlayClick} classname={menuOverlay}  links={navLink}/>
      ) 
      : ( null)
 
      }
    </nav>
  )
}

export default Navbar
