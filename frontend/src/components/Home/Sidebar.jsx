import React from 'react'
import { BsListTask } from "react-icons/bs";
import { IoMdDoneAll } from "react-icons/io";
import { MdOutlinePendingActions } from "react-icons/md";
import { FcLike } from "react-icons/fc";
import { Link } from 'react-router-dom';


function Sidebar() {
  const data = [
    { title: "All Tasks",icons:<BsListTask/> ,path:'/'},
    { title: "Completed Task" ,icons:<IoMdDoneAll/>,path:'/completedTask' },
    { title: "Incomplete Task",icons:<MdOutlinePendingActions/>,path:'/incompTask' },
    { title: "Important Task" ,icons:<FcLike/>,path:'/impTask' },
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
          <Link to={item.path} className='m-4 py-2 text-[3vh] flex items-center gap-2 hover:bg-gray-600 transition-all rounded duration-300 px-1' key={i}>
           {item.icons} {item.title}
          </Link>
        ))}
      </div>
      <div>
        <button className='bg-gray-600 w-full p-2 rounded'>Logout</button>
      </div>
    </>
  )
}

export default Sidebar
