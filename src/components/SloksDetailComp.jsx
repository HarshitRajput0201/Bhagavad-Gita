import React, { useContext } from 'react';
import { AppContext } from '../context/AppContext';
import Spinner from './Spinner';
import { FaArrowLeft, FaArrowRight } from "react-icons/fa6";
import { NavLink, useLocation } from 'react-router-dom';


const SloksDetailComp = () => {

  const { sloks, chapter, loading } = useContext(AppContext);
  const location = useLocation();
  const totalSloks = chapter.verses_count;
  const ch = sloks.chapter;
  const sl = Number(location.pathname.split("/").at(-1));


  return (
    <div className='flex justify-center items-center'>
        {
          loading ? (<div className='fixed top-[50%] left-[50%]'><Spinner/></div>) : 
          (
            <div>
              <p className='text-4xl underline text-center pb-8 2xl:text-5xl xl:text-4xl lg:text-3xl md:text-2xl sm:text-xl'>Slok: {sloks.chapter}.{sloks.verse}</p>
              <div className='flex flex-row gap-5'>
                <p className='text-4xl py-4 inline text-justify 2xl:text-4xl xl:text-3xl lg:text-2xl md:text-xl sm:text-lg'>Slok: </p>
                <p className='text-4xl py-4 inline text-justify leading-relaxed 2xl:text-4xl xl:text-3xl lg:text-2xl md:text-xl sm:text-lg'>"{sloks.slok}"</p>
              </div>
              <div className='flex flex-row gap-5'>
                <p className='text-4xl py-4 inline text-justify 2xl:text-4xl xl:text-3xl lg:text-2xl md:text-xl sm:text-lg'>Translation: </p>
                <p className='text-4xl py-4 inline text-justify leading-relaxed 2xl:text-4xl xl:text-3xl lg:text-2xl md:text-xl sm:text-lg'>"{sloks.transliteration}"</p>
              </div>
              
              <div>
                <div>
                  {
                    sl > 1 && (
                      <NavLink to={`/chapter/${ch}/slok/${sl-1}`}>
                        <button className='text-center text-xl fixed left-12 bottom-12 p-4 bg-white rounded-full text-black 2xl:text-xl xl:text-lg lg:text-lg md:text-md sm:text-sm'><FaArrowLeft/></button>
                      </NavLink>
                    )              
                  }
                </div>
                <div >
                  {
                    sl < totalSloks && (
                      <NavLink to={`/chapter/${ch}/slok/${sl+1}`}>
                        <button className='text-center text-xl fixed right-12 bottom-12 p-4 bg-white rounded-full text-black 2xl:text-xl xl:text-lg lg:text-lg md:text-md sm:text-sm'><FaArrowRight/></button>
                      </NavLink>
                    )              
                  }
                </div>
              </div>
              <div className='text-center text-3xl fixed left-[44%] bottom-12 py-2 px-8 bg-white rounded-full text-black 2xl:text-3xl xl:text-2xl lg:text-xl md:text-lg sm:text-lg'>
                <NavLink to={`/chapter/${ch}`}>
                  <button>Chapter</button>
                </NavLink>
              </div>
              
            </div>
            
          )
        }
    </div>
  )
}

export default SloksDetailComp;