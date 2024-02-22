import React, { useContext } from 'react';
import Header from '../components/Header';
import ChaptersComp from '../components/ChaptersComp';
import Spinner from '../components/Spinner';
import { AppContext } from '../context/AppContext';


const HomePage = () => {

  const { chapters, loading } = useContext(AppContext);

  return (
    <div className='bg-[url(/assets/bg-image.jpg)] bg-cover bg-center h-screen'>
      { 
        loading ? (<div className='h-screen w-screen flex justify-center items-center bg-transparent'><Spinner/></div>) : chapters.length === 0 ? 
        (
          <div className='2xl:text-5xl xl:text-4xl lg:text-3xl md:text-2xl sm:text-xl text-white h-screen w-screen flex justify-center items-center bg-transparent '>No Data Found</div>
        ) : 
        (
          <div className='h-screen w-screen p-8'>
            <Header />
            <ChaptersComp/>
          </div>
        )
      }
    </div>
  );
};

export default HomePage;
