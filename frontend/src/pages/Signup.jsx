import React from 'react'
import { Link, useNavigate } from 'react-router-dom'
import axios from 'axios';
import { useSelector } from 'react-redux';

function Signup() {
  const navigate = useNavigate();
  const isLoggedIn = useSelector(state => state.auth.isLoggedIn);
  if(isLoggedIn == true){
    navigate('/');
  }
  const [Data, setData] = React.useState({
    userName: '',
    email: '',
    password: ''
  });

 const history =  useNavigate();

  const change = (e) => {
    const{name,value} = e.target;
    setData({...Data,[name]:value});
  };

  const submit = async () => {
   try {
    if (Data.userName === '' || Data.email === '' || Data.password === '') {
      alert("All fields are required!!!");
     }else{
       const response =  await axios.post("http://localhost:8080/server/api/signup",Data);
       setData({userName: '',
        email: '',
        password: ''});
       alert(response.data.message);
       history('/login');
     }
   } catch (e ) {
    alert(e.response.data.message);
   }
  }

  return (
    <div className='h-[98vh] flex items-center justify-center'>
       <div className='p-4 w-2/6 rounded bg-gray-800 text-black flex items-center justify-center flex-col'>
            <div className='text-white text-2xl font-semibold'>Sign Up</div>
            <input type='userName' placeholder='Username...' className='px-3 py-2 my-3 w-full rounded' name='userName' onChange={change}  value={Data.userName}></input>
            <input type='email' placeholder='abc@example.com' className='px-3 py-2 my-3 w-full rounded' name='email' onChange={change} value={Data.email}></input>
            <input type='password' placeholder='Password...' className='px-3 py-2 my-3 w-full rounded' name='password' onChange={change} value={Data.password}></input>
            <button onClick={submit} className='bg-blue-400 text-xl  font-semibold text-black mt-3 px-3 py-2 rounded w-full hover:bg-green-600 transition-all duration-300'>Sign Up</button>
            <Link to='/login
            ' className='text-center text-gray-600 hover:text-gray-400 m-2'>Already Have an account? Login Here</Link>
        </div>
    </div>
  )
}

export default Signup