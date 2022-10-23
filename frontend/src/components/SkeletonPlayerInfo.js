import React from 'react'
import Skeleton from 'react-loading-skeleton'
import 'react-loading-skeleton/dist/skeleton.css'

const SkeletonPlayerInfo = () => {
  return (
    <div>
      <div className='flex flex-col-reverse md:flex-row'>
        <div className='details md:w-[65%]'>
          <p className='text-2xl md:text-4xl font-semibold'><Skeleton width={300} /></p>
          <p className='text-lg md:text-xl font-medium'><Skeleton width={200} /></p>
          <p className='text-lg mt-5'><Skeleton width={200} /></p>
          <div className='my-2 md:w-[60%]'>
          <Skeleton height={100} />
          </div>

          <p className='text-lg mt-5'><Skeleton width={200} /></p>
          <div className='my-2 md:w-[60%]'>
          <Skeleton height={100} />
          </div>

          <p className='text-lg mt-5'><Skeleton width={200} /></p>

          <div className='my-2 md:w-[60%] py-1 px-2'>
          <Skeleton height={100} />
          </div>
        </div>
        <div className="img mb-4 md:mb-0 h-80 m-auto md:h-[30rem]">
          <Skeleton height={320} width={300} />
        </div>
      </div>

      <div className='my-5 text-justify'>
        <Skeleton height={150} />
      </div>
    </div>
  )
}

export default SkeletonPlayerInfo;