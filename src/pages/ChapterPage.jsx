import React, { useContext } from 'react'
import ChapterComp from '../components/ChapterComp';
import SloksComp from '../components/SloksComp';
import { AppContext } from '../context/AppContext';
import Spinner from '../components/Spinner';

const ChapterPage = () => {

  const { chapter, loading } = useContext(AppContext);

  return (
    <div className='bg-[url(/assets/bg-image.jpg)] bg-cover bg-center h-screen grayscale'>
      {
        loading ? (<div className='h-screen w-screen flex justify-center items-center bg-transparent'><Spinner/></div>) : 
        (
          chapter.length === 0 ? 
          (
            <div className='2xl:text-5xl xl:text-4xl lg:text-3xl md:text-2xl sm:text-xl text-white h-screen w-screen flex justify-center items-center bg-transparent '>No Data Found</div>
          ) : 
          (
            <div className=' flex justify-between h-screen 2xl:flex-row 2xl:p-16 xl:flex-row xl:p-14 lg:flex-row lg:p-12 md:flex-col md:p-12 sm:flex-col sm:p-10'>
              <ChapterComp/>
              <SloksComp/>
            </div>
          )
        )
      }
    </div>
  )
}

export default ChapterPage;