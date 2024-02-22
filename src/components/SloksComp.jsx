import React, { useContext } from 'react'
import { AppContext } from '../context/AppContext';
import { NavLink } from 'react-router-dom';
import { TbPointFilled } from "react-icons/tb";


const SloksComp = () => {

  const { chapter } = useContext(AppContext);
  const count = chapter.verses_count;
  const numbers = [];
  for( let i = 1; i <= count; i++ ){
    numbers.push(i);
  }

  return (
    <div className='2xl:w-[20%] xl:w-[20%] lg:w-[20%] lg:px-4 text-white bg-white bg-opacity-20 backdrop-blur-sm rounded-lg py-4 px-6 flex flex-col'>
      <div className='2xl:text-4xl xl:text-3xl lg:text-2xl md:text-2xl text-center underline pb-4'>Sloks</div>
          <div className='2xl:w-[100%] 2xl:flex-col 2xl:gap-0 xl:w-[100%] xl:flex-col xl:gap-0 lg:w-[100%] lg:flex-col lg:gap-0  md:w-[100%] md:flex-row md:gap-10 flex  overflow-y-scroll'>
            {
              numbers.map( (number, index) => {
                return(
                  <NavLink key={index} to={`/chapter/${chapter.chapter_number}/slok/${number}`}>
                    <div className='flex flex-row hover:bg-white rounded-md hover:bg-opacity-20 2xl:w-[100%] xl:w-[100%] lg:w-[100%] md:w-[100px]'>
                      <div className='flex items-center p-1.5 '><TbPointFilled /></div>
                      <div className='flex flex-row items-center p-1.5 '>
                        <p>Slok {number}</p>
                      </div>
                    </div>
                  </NavLink>
                )
              })
            }
          </div>
    </div>
  )
}

export default SloksComp;