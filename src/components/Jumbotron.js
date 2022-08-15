import React from 'react'
import stadium from "../images/stadium.jpg";

const Jumbotron = () => {
  return (
    <div className='relative'>
      <div className='bg-black'>
        <img className='w-[100%] rem-height opacity-50 object-cover' src={stadium} alt="Stadium" />
      </div>
      <div className='absolute top-0 rem-height pl-[7.5%] w-[55%] flex flex-col justify-center items-start'>
        <h2 className='block pb-10 text-6xl leading-[5rem] text-white'>Your one stop destination for cricket related information</h2>
        <button className='text-white bg-purple-600 py-2 px-4 rounded-lg hover:bg-purple-700 more-button'>Explore More
        <span className='hidden arrow'>
          <span className='opacity-50 pl-2'>&gt;</span>
          <span className='opacity-90'>&gt;</span>
        </span>
        </button>
      </div>
    </div>
  )
}

export default Jumbotron