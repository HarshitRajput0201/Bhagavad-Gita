import React, { useContext } from 'react'
import { AppContext } from '../context/AppContext';
import { NavLink } from 'react-router-dom';


const ChapterComp = () => {

    const { chapter } = useContext(AppContext);
  return (      
    <div className='2xl:w-[70%] xl:w-[70%] lg:w-[70%] text-white'>
      <div className='flex flex-col justify-between h-full'>
        <div>
          <p className='2xl:text-4xl xl:text-3xl lg:text-xl md:text-xl py-2'>Chapter {chapter.chapter_number}: <span>{chapter.translation}</span></p>
          <p className='2xl:text-3xl xl:text-2xl lg:text-xl md:text-xl py-2'>Verse Count: {chapter.verses_count}</p>
          <p className='2xl:text-3xl xl:text-2xl lg:text-xl md:text-xl py-1'>Meaning:</p>
          <p className='2xl:text-3xl xl:text-2xl lg:text-xl md:text-xl py-1'>"en" : {chapter.meaning.en}</p>
          <p className='2xl:text-3xl xl:text-2xl lg:text-xl md:text-xl py-1'>"hi" : {chapter.meaning.hi}</p>
          <p className='2xl:text-3xl xl:text-2xl lg:text-xl md:text-xl py-2'>Summary:</p>
          <p className='2xl:text-2xl xl:text-xl lg:text-lg md:text-md py-2 text-justify'>{"en"} : {chapter.summary.en}</p>
          <p className='2xl:text-2xl xl:text-xl lg:text-lg md:text-md py-2 text-justify pb-8' >"hi" : {chapter.summary.hi}</p>
        </div>
        <div className='text-center'>
          <NavLink to={'/Bhagavad-Gita/'}>
            <button className='2xl:text-3xl xl:text-2xl lg:text-xl md:text-lg py-2 px-8 bg-white text-black rounded-full'>Home</button>
          </NavLink>
        </div>
      </div>
    </div>
  )
}

export default ChapterComp;