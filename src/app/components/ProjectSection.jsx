'use client';
import React , {useState} from 'react'
import ProjectCard from './ProjectCard'
import ProjectTag from './ProjectTag'

const Project_Data = [
    {
        id : 1 ,
        title : "A Beautiful Night",
        description : "I am missing to someone",
        image : "/images/projects/IMG_1.jpg",
        tag : ["All" , "Web"],
        gitUrl : "/" ,
        previewUrl : "/images/projects/IMG_1.jpg" 
    },
    {
        id : 2 ,
        title : "At Home",
        description : "Lazy boy , he don't learn his lesson",
        image : "/images/projects/IMG_2.jpg",
        tag : ["All" , "Web"],
        gitUrl : "/" ,
        previewUrl : "/images/projects/IMG_2.jpg" 
    },
    {
        id : 3 ,
        title : "Job Photo",
        description : "Missing in job , that I am going to inya kanbaung within my job friend",
        image : "/images/projects/IMG_3.jpg",
        tag : ["All" , "Web"],
        gitUrl : "/" ,
        previewUrl : "/images/projects/IMG_3.jpg" 
    },
    {
        id : 4 ,
        title : "Football Player",
        description : "PSG fan with psg blouse .",
        image : "/images/projects/IMG_4.jpg",
        tag : ["All" , "Web"],
        gitUrl : "/" ,
        previewUrl : "/images/projects/IMG_4.jpg" 
    },
    {
        id : 5 ,
        title : "At Hospital",
        description : "loser felling that day ( I wanna die )",
        image : "/images/projects/IMG_5.jpg",
        tag : ["All" , "Web"],
        gitUrl : "/" ,
        previewUrl : "/images/projects/IMG_5.jpg" 
    },
    {
        id : 6 ,
        title : "Novotel Hotel",
        description : "Learning fastival with office's friend",
        image : "/images/projects/IMG_6.jpg",
        tag : ["All" , "Mobile"],
        gitUrl : "/" ,
        previewUrl : "/images/projects/IMG_6.jpg" 
    },
    {
        id : 7 ,
        title : "NgweSaung Photo",
        description : "Happy Day , Next time I wanna go that place",
        image : "/images/projects/IMG_7.jpg",
        tag : ["All" , "Mobile"],
        gitUrl : "/" ,
        previewUrl : "/images/projects/IMG_7.jpg" 
    }
]

const ProjectSection = () => {

    const [tag , setTag]=useState("All");

    const handleTagChange = (newTag) => {
        setTag(newTag)
    }

const filteredProject = Project_Data.filter((project) => 
    project.tag.includes(tag)
)

  return (
    <section id='projects' className='relative'>
        <div className=' bg-gradient-to-r from-orange-500 to-transparent rounded-full h-80 w-80 z-0 blur-lg absolute -top-4 -right-4 tranform translate-x-1/2 -translate-y-1/2 '></div>
      <h2 className=' text-center text-4xl font-bold text-white'>My Projects</h2>
      <div className=' text-white flex flex-row justify-center items-center gap-2 py-6'>
        <ProjectTag onClick={handleTagChange} name="All" isSelected={tag === 'All'} />
        <ProjectTag onClick={handleTagChange} name="Web" isSelected={tag === 'Web'} />
        <ProjectTag onClick={handleTagChange} name="Mobile" isSelected={tag === 'Mobile'} />
      </div>
      <div className='grid md:grid-cols-3 gap-4'>{filteredProject.map((project) => <ProjectCard 
      key={project.id }
      title={project.title}
      description={project.description}
      imgUrl={project.image}
      gitUrl={project.gitUrl}
      previewUrl={project.previewUrl}/>)}</div>
      </section>
  )
}

export default ProjectSection
