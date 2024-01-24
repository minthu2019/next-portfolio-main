import React from 'react'
import NavLink from './NavlLink'


const MenuOverlay = ({links,onclick, classname}) => {

  return (
    <div className='block md:hidden'>
      <ul  className={`${classname } flex flex-col py-4 items-center m-2`}>
        {links.map((link,index) => (
          <li onClick={onclick} key={index} className='w-80 m-2  font-bold bg-black text-center rounded-md'>
            <NavLink  href={link.path} title={link.title} />
          </li>
        ))}
      </ul>
    </div>
  )
}

export default MenuOverlay
