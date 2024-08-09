import axios from 'axios';
import React from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { authActions } from '../store/auth';
import { useDispatch, useSelector } from 'react-redux';


function Login() {
  const navigate = useNavigate();
  const isLoggedIn = useSelector(state => state.auth.isLoggedIn);
  if(isLoggedIn == true){
    navigate('/');
  }
  const [Data, setData] = React.useState({
    userName: '',
    password: ''
  });

  const history =  useNavigate();
  const dispatch = useDispatch();

  const change = (e) => {
    const{name,value} = e.target;
    setData({...Data,[name]:value});
  };

  const submit = async () => {
   try {
    if (Data.userName === '' || Data.email === '' || Data.password === '') {
      alert("All fields are required!!!");
     }else{
       const response =  await axios.post("http://localhost:8080/server/api/login",Data);
       setData({userName: '',
        password: ''});
       alert(response.data.message);
       localStorage.setItem('token',response.data.token);
       localStorage.setItem('id',response.data.id);
       console.log(localStorage);
       dispatch(authActions.login());
       history('/');
     }
   } catch (e ) {
    alert(e.response.data.message);
   }
  }
  return (
    <div className='h-[98vh] flex items-center justify-center'>
    <div className='p-4 w-2/6 rounded bg-gray-800 text-black flex items-center justify-center flex-col'>
        <div className='text-white text-2xl font-semibold'>Login</div>
        <input type='userName' placeholder='userName...' className='px-3 py-2 my-3 w-full rounded' name='userName' onChange={change} value={Data.userName}></input>
        <input type='password' placeholder='Password...' className='px-3 py-2 my-3 w-full rounded' name='password' onChange={change} value={Data.password}></input>
        <button onClick={submit} className='bg-blue-400 text-xl  font-semibold text-black mt-3 px-3 py-2 rounded w-full hover:bg-green-600 transition-all duration-300'>Login</button>
        <Link to='/signup' className='text-center text-gray-600 hover:text-gray-400 m-2'>Not having a Account? Sign up Here</Link>
    </div>
</div>
  )
}

export default Login