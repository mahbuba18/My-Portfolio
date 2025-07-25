import React from 'react';
import Bannar from './Bannar';
import Lottie from 'lottie-react';
import Contact from './Contact';
import Skills from './Skills';
import Project from './Project';


const Home = () => {
    return (
        <div className='bg-white shadow-lg'>
          
           <Bannar></Bannar>
           <Skills></Skills>
           <Project></Project>
           <Contact></Contact>
            
        </div>
    );
};

export default Home;