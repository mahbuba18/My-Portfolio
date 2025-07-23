import React from 'react';
import Bannar from './Bannar';
import Lottie from 'lottie-react';
import Contact from './Contact';
import Skills from '../Skills';


const Home = () => {
    return (
        <div className='bg-white shadow-lg'>
          
           <Bannar></Bannar>
           <Skills></Skills>
           <Contact></Contact>
            
        </div>
    );
};

export default Home;