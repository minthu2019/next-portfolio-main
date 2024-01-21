import Image from 'next/image'
import HeroSection from './components/HeroSection'
import Navbar from './components/Navbar'
import AboutSection from './components/AboutSection'
import ProjectSection from './components/ProjectSection'
import EmailSection from './components/EmailSection'
import FooterSection from './components/FooterSection'



export default function Home() {
  return (
    <main className=" max-w-[1440px] mx-auto flex min-h-screen flex-col bg-[#0c0909] container">
      <Navbar/>
      <div className=' mx-auto mt-24 px-12 py-4 '>
        <HeroSection/>
        <AboutSection/>
        <ProjectSection/>
        <EmailSection/>
      </div>
      <FooterSection/>
    </main>
  )
}
