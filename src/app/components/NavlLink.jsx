import React from "react";
import Link from "next/link"


const NavLink = ({href , title}) =>{
    return(
        <Link href={href}
         className='  block 
        text-[#ADB7BE] sm:text-xl rounded  
        p-4 hover:text-white hover:bg-blue-500' > 
         {title}
         </Link>
    )
};

export default NavLink;