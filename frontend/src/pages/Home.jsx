import React from 'react'
import Sidebar from '../components/Home/Sidebar'
import { Outlet } from 'react-router-dom'

function Home() {
  return (
    <div className='flex  h-[98vh] gap-4'>
      <div className='border rounded-xl p-3 border-slate-600 w-1/6 flex flex-col justify-between'><Sidebar/></div>
      <div className='border rounded-xl p-3 border-slate-600  w-5/6'><Outlet></Outlet></div>
    </div>
  )
}

export default Home