import React from 'react'
import { BsListTask } from "react-icons/bs";
import { IoMdDoneAll } from "react-icons/io";
import { MdOutlinePendingActions } from "react-icons/md";
import { FcLike } from "react-icons/fc";


function Sidebar() {
  const data = [
    { title: "All Tasks",icons:<BsListTask/> },
    { title: "Completed Task" ,icons:<IoMdDoneAll/>},
    { title: "Incomplete Task",icons:<MdOutlinePendingActions/> },
    { title: "Important Task" ,icons:<FcLike/>}
  ];

  return (
    <>
      <div>
        <h2 className='text-xl'>Shubham Mahobia</h2>
        <h4 className='text-gray-400 mb-1'>mahobiashubham4@gmail.com</h4>
        <hr />
      </div>
      <div>
        {data.map((item, i) => (
          <div className='m-4 py-2 text-[3vh] flex items-center gap-2 hover:bg-gray-600 transition-all rounded duration-300 px-1' key={i}>
           {item.icons} {item.title}
          </div>
        ))}
      </div>
      <div>
        <button className='bg-gray-600 w-full p-2 rounded'>Logout</button>
      </div>
    </>
  )
}

export default Sidebar
