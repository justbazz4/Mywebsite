import type { GetStaticProps, NextPage } from 'next';
import Head from 'next/head';
import Header from '../components/Header';
import Hero from '../components/Hero';
import About from '../components/About';
import Experience from '../components/Experiences/Experience';
import Skills from '../components/Skill/Skills';
import Projects from '../components/Projects';
import ContactMe from '../components/ContactMe';



const Home: NextPage = () => {
  
  return (
    <div className='bg-cyan-300 text-gray h-screen snap-y snap-mandatory overflow-y-scroll overflow-x-hidden scrollbar-track-gray-500 scrollbar-thumb-red-500 z-0 bottom-5  items-center 
      '>
      <Head>
        <title>Blockchain Bazz</title>
      </Head>

      <div className='container mx-auto'>
        <Header />

        <section id='hero' className='snap-start'>
          <Hero  />
        </section>

        <section id='about' className='snap-center'>
          <About  />
        </section>

        <section id='experience' className='snap-center'>
          <Experience  />
        </section>

        <section id='skills' className='snap-start'>
          <Skills  />
        </section>

        <section id='projects' className='snap-start'>
          <Projects  />
        </section>

        <section id='contact' className='snap-start'>
          <ContactMe />
        </section>

         
      </div>
      
    </div>
    
  );
}

export default Home;

