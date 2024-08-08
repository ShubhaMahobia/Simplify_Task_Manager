import React from 'react'
import { Link } from 'react-router-dom'

function Signup() {
  return (
    <div className='h-[98vh] flex items-center justify-center'>
       <div className='p-4 w-2/6 rounded bg-gray-800 text-black flex items-center justify-center flex-col'>
            <div className='text-white text-2xl font-semibold'>Sign Up</div>
            <input type='username' placeholder='Username...' className='px-3 py-2 my-3 w-full rounded' name='username'></input>
            <input type='email' placeholder='abc@example.com' className='px-3 py-2 my-3 w-full rounded' name='email'></input>
            <input type='password' placeholder='Password...' className='px-3 py-2 my-3 w-full rounded' name='password'></input>
            <button className='bg-blue-400 text-xl  font-semibold text-black mt-3 px-3 py-2 rounded w-full hover:bg-green-600 transition-all duration-300'>Sign Up</button>
            <Link to='/login' className='text-center text-gray-600 hover:text-gray-400 m-2'>Already Have an account? Login Here</Link>
        </div>
    </div>
  )
}

export default Signup