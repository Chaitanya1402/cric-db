import React from 'react'
import { Link } from 'react-router-dom'

const ErrorPage = () => {
  return (
    <div className="flex justify-center items-center rem-height">
      <div className="w-[38%] text-center">
        <h1 className="text-4xl pb-[50px]">Oops! Page not found</h1>
        <p className='text-lg'>We could not find the page you were looking for. No worries, we do have our <Link to="/" className="text-red-500">home page</Link> ready for you.</p>
      </div>
    </div>
  )
}

export default ErrorPage



// .link {
//     color: rgb(35, 35, 255);
// }