import React,{useState} from 'react'
import { Form, Header, Hero, NavBar, Partners ,Curriculum, Tools, UpcomingBatch, Trainer,Projects, Accredited,Certification, Enroll, Testimonial, Faq, Bottom, Footer} from './'
import { NavData } from '@/data';

const Dashboard = () => {
  const [activeNav, setActiveNav] = useState('Overview');
  return (
    <div className='max-w-screen overflow-hidden min-h-screen flex justify-center'>
      <div className='w-full flex flex-col'>
      <div className='fixed top-0 w-full z-1000' >
        <Header/>
        <NavBar NavData={NavData} activeNav={activeNav} setActiveNav={setActiveNav}/>
      </div>
      <div className='my-28' >
        <Hero/>
        <Form/>
        <Partners/>
        <Curriculum/>
        <Tools/>
        <UpcomingBatch/>
        <Trainer/>
        <Projects/>
        <Accredited/>
        <Certification/>
        <Enroll/>
        <Testimonial/>
        <Faq/>
        <Footer/>
        <Bottom/>
      </div>

      </div>
    </div>
  )
}

export default Dashboard
