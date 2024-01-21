"use client"
import React , {useState, useTransition} from 'react'
import Image from 'next/image'
import TabButton from './TabButton'

const TAB_DATA = [
  {
    title : "Skills",
    id : "skills",
    content:(
      <ul className=' list-disc pl-2'>
        <li>Node.js</li>
        <li>Express</li>
        <li>Javascript</li>
        <li>React</li>
        <li>TailwindCSS</li>
        <li>Next.js</li>
      </ul>
    )
  },
   {
    title : "Education",
    id : "education",
    content:(
      <ul className=' list-disc pl-2'>
        <li>Yankin Education College</li>
        <li>But My education is not good because Education college is not my intresting.</li>
        
      </ul>
    )
  },
  {
    title : "Certifications",
    id : "certifications",
    content:(
      <ul className=' list-disc pl-2'>
        <li>I have no Certifications.</li>
        <li>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Tempora, ipsum?</li>
        
      </ul>
    )
  }
]


const AboutSection = () => {
    const [tab, setTab] = useState("skills");
    const [ isPending , startTransition ] = useTransition();

    const handleTapChange = (id) => {
        startTransition(() => (
            setTab(id)
        ))
    }


  
  return (


    <section className='text-white' id='about'>
      <div className='md:grid md:grid-cols-2 gap-8 items-center py-8 px-4 xl:gap-16 sm:p-16 '>
        <Image alt="hero image" src="/images/about-image.jpg" width={500} height={500}/>
        <div className=' mt-4 md:mt-0 text-left flex flex-col h-full'>
            <h2 className=' text-4xl font-bold text-white mb-4'>About Me</h2>
            <p className=' text-base lg:text-lg'>Lorem ipsum dolor sit amet consectetur adipisicing 
            elit. At perspiciatis accusamus consectetur sit aut amet autem soluta 
            quae iste error tempore, possimus, illum rerum quod sint. Veniam 
            quasi ex suscipit quae officiis? Deserunt excepturi fugiat officia
             incidunt quibusdam voluptatibus doloribus obcaecati magnam amet,
              ratione quos sint sunt exercitationem est veritatis quis quam
               dolorum. Inventore itaque fuga qui dicta voluptatibus sapiente
                a asperiores ullam
             possimus facere? Neque rem officiis sit earum.
             </p>
             <div className='flex flex-row justify-start mt-8 '>
               <TabButton
                selectTab = {() => handleTapChange("skills")}
                active={tab==="skills"}>
                    {""}
                    Skills{""}
                </TabButton>

                <TabButton
                selectTab = {() => handleTapChange("education")}
                active={tab==="education"}>
                    {""}
                    Education{""}
                </TabButton>

                <TabButton 
                selectTab = {() => handleTapChange("certifications")} 
                active={tab==="certifications"}>
                    {""}
                    Certifications{""}
                </TabButton>
             </div> 
             <div className='mt-8 '>  { TAB_DATA.find((t) => t.id === tab).content}</div>
        </div> 
      </div>
    </section>
  )
}

export default AboutSection
