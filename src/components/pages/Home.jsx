import React from 'react';
import Bannar from './Bannar';
import Lottie from 'lottie-react';
import Contact from './Contact';
import Skills from './Skills';
import Project from './Project';
import About from './About';


const Home = () => {
    return (
        <div id='name' className='bg-white shadow-lg'>
          
           <Bannar></Bannar>
           <About></About>
           <Skills></Skills>
           <Project></Project>
           <Contact></Contact>
            
        </div>
    );
};

export default Home;