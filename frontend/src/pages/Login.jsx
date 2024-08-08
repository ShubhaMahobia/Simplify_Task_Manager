import React from 'react'
import { Link } from 'react-router-dom'

function Login() {
  return (
    <div className='h-[98vh] flex items-center justify-center'>
    <div className='p-4 w-2/6 rounded bg-gray-800 text-black flex items-center justify-center flex-col'>
        <div className='text-white text-2xl font-semibold'>Login</div>
        <input type='username' placeholder='Username...' className='px-3 py-2 my-3 w-full rounded' name='username'></input>
        <input type='password' placeholder='Password...' className='px-3 py-2 my-3 w-full rounded' name='password'></input>
        <button className='bg-blue-400 text-xl  font-semibold text-black mt-3 px-3 py-2 rounded w-full hover:bg-green-600 transition-all duration-300'>Login</button>
        <Link to='/signup' className='text-center text-gray-600 hover:text-gray-400 m-2'>Not having a Account? Sign up Here</Link>
    </div>
</div>
  )
}

export default Login