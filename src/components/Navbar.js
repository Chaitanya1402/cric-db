import React from 'react'

const Navbar = () => {
  return (
    <div className='bg-purple-300 text-black'>
      <div className='w-[85%] h-16 flex m-auto justify-between items-center'>
        <div>
          <h2 className='text-2xl font-medium text-black'>CricDB</h2>
        </div>
        <div>
          <ul className='flex justify-center items-center'>
            <li className='mx-3'><a className='px-2 py-1 text-lg rounded-xl border-2 border-purple-300 hover:bg-purple-200 link-transition' href="/">Home</a></li>
            <li className='mx-3'><a className='px-2 py-1 text-lg rounded-xl border-2 border-purple-300 hover:bg-purple-200 link-transition' href="/">About</a></li>
            <li className='mx-3'><a className='px-2 py-1 text-lg rounded-xl border-2 border-purple-300 hover:bg-purple-200 link-transition' href="/">Contact</a></li>
          </ul>
        </div>
      </div>
    </div>
  )
}

export default Navbar;
