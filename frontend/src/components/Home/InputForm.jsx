import React from 'react';
import { IoClose } from "react-icons/io5";

function InputForm({ inputDiv, setInputDiv }) {
  const isVisible = inputDiv === 'show'; // Assume 'show' class indicates visibility

  return (
    <>
      {isVisible && (
        <div className="fixed top-0 left-0 bg-gray-800 opacity-50 w-full h-screen"></div>
      )}
      {isVisible && (
        <div className="fixed top-0 left-0 flex items-center justify-center w-full h-screen">
          <div className='w-2/6 bg-gray-900 h-[65vh] rounded p-3 flex flex-col'>
            <div className='flex justify-end my-4'>
              <button onClick={() => setInputDiv('hidden')}>
                <IoClose className='text-3xl text-white' />
              </button>
            </div>
            <input type="text" placeholder='Title' name='title' className='p-3 rounded' />
            <textarea type="text" placeholder='Description...' name='desc' cols="30" rows="10" className='p-3 rounded my-3' />
            <button className='px-3 py-3 font-semibold bg-blue-400 rounded hover:bg-green-500 transition-all duration-300'>Submit</button>
          </div>
        </div>
      )}
    </>
  );
}

export default InputForm;