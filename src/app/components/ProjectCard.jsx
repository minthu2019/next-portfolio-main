import React from 'react'
import{ CodeBracketIcon, EyeIcon } from "@heroicons/react/24/outline"
import Link from 'next/link'


const ProjectCard = ({imgUrl, title, description ,gitUrl , previewUrl }) => {
  return (
    <div className=' bg-gradient-to-r from-transparent to-orange-600 rounded-xl border-4 border-orange-600'>
      <div className=' h-[400px] md:h-102 rounded-t-xl relative group overflow-hidden' style={{background: `url(${imgUrl})` , backgroundSize : "cover"}}>
        <div className=' overlay  items-center justify-center absolute top-0 left-0 w-full h-full bg-[#181818] bg-opacity-0 hidden group-hover:flex group-hover:bg-opacity-80 transition-all duration-500'>

          <Link href = {gitUrl} className=' h-14 w-14 mr-2 border-2 relative rounded-full border-[#ADV7BE] hover:border-white group/link:'>
            <CodeBracketIcon className=' h-10 w-10 absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-[#ADB7BE] cursor-pointer group-hover/link:text-white'/>
          </Link>

          <Link href = {previewUrl} className=' h-14 w-14 border-2 relative rounded-full border-[#ADV7BE] hover:border-white group/link:'>
            <EyeIcon className=' h-10 w-10 absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-[#ADB7BE] cursor-pointer group-hover/link:text-white'/>
          </Link>

        </div>
      </div>
      <div className=' text-white rounded-xl bg-slate-500 m-2 py-6 px-4'>
        <h5 className=' text-xl font-semibold mb-2 '>{title}</h5>
        <p className=' text-white-500'>{description}</p>
      </div>
    </div>
  )
}

export default ProjectCard
