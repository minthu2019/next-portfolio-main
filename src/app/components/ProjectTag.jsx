import React from 'react'

const ProjectTag = ({name , onClick, isSelected}) => {
 
    const buttonStyle = isSelected ?
     " text-white bg-purple-500 ":
     " text-[#ADB7B3] border-slate-600 hover:boder-white";

    return (
    <button onClick={() => onClick(name)} className={`${buttonStyle}  rounded-full border-2 px-6 py-3 text-xl cursor-pointer`}>
        {name}
    </button>
  )
}

export default ProjectTag   
