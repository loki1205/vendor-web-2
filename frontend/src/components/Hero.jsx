import React from 'react';
import {ReactTyped} from 'react-typed';
import banner from '../assets/hero-image.webp'
const Hero = () => {
  return (
    <>
      <div className='flex flex-col-reverse lg:flex-row lg:justify-center lg:items-center px-10 bg-gray-100 pt-10'>
        <div className='flex-1 text-gray-900'>
          <div className='max-w-[800px] mt-[-80px] w-full mx-auto text-center flex flex-col lg:justify-center'>
            <h1 className='text-4xl mt-16 lg:mt-0 md:text-6xl font-bold py-6'>
              Secure your supply chain
            </h1>
            <div className='flex justify-center items-center'>
              <ReactTyped
                className='text-3xl text-[#00df9a] pb-5 font-bold md:pl-4 pl-2'
                strings={['Check latest breaches', 'Get risk score', 'Get a list of APTs']}
                typeSpeed={90}
                backSpeed={50}
                loop
              />
            </div>
            <p className='md:text-2xl text-xl font-bold text-gray-500'>Reduce third-party incidents by 75% and transform how your team identifies, monitors, mitigates, and reports on risk.</p>
            <a href='/vendors'>
              <button className='bg-[#00df9a] hover:brightness-75 ease-in duration-150 cursor-pointer w-[200px] rounded-md font-medium my-6 mx-auto py-3 text-black'>See Vendors</button>
            </a>
          </div>
        </div>
        <div className='flex-1 justify-center w-full'>
          <img alt='banner' src={banner}/>
        </div>
      </div>
    </>
  );
};

export default Hero;
