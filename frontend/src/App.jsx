import React from 'react'
import './index.css';
import Home from './pages/Home';
import ImportantTask from './pages/ImportantTask';
import CompletedTask from './pages/CompletedTask';
import IncompleteTask from './pages/IncompleteTask';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import AllTask from './pages/AllTask';

function App() {
  return(
<div className='h-screen w-full bg-gray-900 text-white p-2'>
  <Router>
    <Routes>
      <Route exact path='/' element={<Home/>}>
      <Route index element={<AllTask/>} />
      <Route path='/impTask' element={<ImportantTask/>} />
      <Route path='/completedTask' element={<CompletedTask/>} />
      <Route path='/incompTask' element={<IncompleteTask/>} />
      </Route>
    </Routes>
  </Router>   
</div>
  ) 
}

export default App
