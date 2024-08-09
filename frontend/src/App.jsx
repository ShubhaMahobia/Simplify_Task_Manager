import React, { useEffect } from 'react'
import './index.css';
import Home from './pages/Home';
import ImportantTask from './pages/ImportantTask';
import CompletedTask from './pages/CompletedTask';
import IncompleteTask from './pages/IncompleteTask';
import { BrowserRouter as Router, Routes, Route, useNavigate } from 'react-router-dom'
import AllTask from './pages/AllTask';
import Signup from './pages/Signup';
import Login from './pages/Login';
import {useDispatch, useSelector} from 'react-redux'
import { authActions } from './store/auth';


function App() {
  const navigate = useNavigate();
  const isLoggedIn = useSelector(state => state.auth.isLoggedIn);
  const dispatch = useDispatch();
  useEffect(() => {
    if(localStorage.getItem('token') && localStorage.getItem('id')){
      dispatch(authActions.login());
    }else{
      navigate('/login');
    }
  }, [])
   return(
<div className='h-screen w-full bg-gray-900 text-white p-2 relative'>
    <Routes>
      <Route exact path='/' element={<Home/>}>
      <Route index element={<AllTask/>} />
      <Route path='/impTask' element={<ImportantTask/>} />
      <Route path='/completedTask' element={<CompletedTask/>} />
      <Route path='/incompTask' element={<IncompleteTask/>} />
      </Route>
      <Route path='/signup' element={<Signup/>} ></Route>
      <Route path='/login' element={<Login/>} ></Route>
    </Routes> 
</div>
  ) 
}

export default App
