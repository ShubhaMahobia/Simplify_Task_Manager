import React from 'react'
import { CiHeart } from "react-icons/ci";
import { MdOutlineEdit } from "react-icons/md";
import { RiDeleteBinLine } from "react-icons/ri";
import { IoIosAddCircle } from "react-icons/io";


function Cards({ home }) {
    const data = [
        { taskname: 'Task 1', description: 'lorem wadiojawpdkawp jwdiajwdipawjdwa awdiawjpdowajd wajdipawjpdjaw',status: 'Incomplete' },
        { taskname: 'Task 2', description: 'Description 2',status: 'Incomplete' },
        { taskname: 'Task 3', description: 'Description 3' ,status: 'Completed'},
        // Add more objects as needed
    ];

const [ImportantButton, setImportantButton] = React.useState("Incomplete");
return (
    <div className='grid grid-cols-3 gap-4 p-4'>
        {data.map((item, i) => (
            <div className='rounded-md p-4 flex-col flex justify-between bg-gray-700' key={i}>
                <h1 className='font-semibold text-lg'>{item.taskname}</h1>
                <p>{item.description}</p>
                <div className='buttons flex items-center gap-3 justify-evenly'>
                    <button className={`${item.status === "Completed" ? "bg-green-800" : "bg-red-400"}  py-1 px-2 rounded mt-4 w-3/6 hover:scale-105 hover:bg-blue-400 transition-all duration-300`}>{item.status}</button>
                    <button><CiHeart className='hover:scale-125 transition-all duration-300' size={20}/></button>
                    <button><MdOutlineEdit className='hover:scale-125 transition-all duration-300'  size={20}/></button>
                    <button><RiDeleteBinLine className='hover:scale-125 transition-all duration-300'  size={20}/></button>
                </div>
            </div>
        ))}
        {home === true && (
            <div className='rounded-md p-4 flex-col flex justify-center items-center text-2xl bg-gray-700 mb-4 hover:scale-105 hover:cursor-pointer transition-all duration-300'>
                <IoIosAddCircle size={30}/>
                <h1>Add More</h1> 
            </div>
        )}
    </div>
)
}

export default Cards