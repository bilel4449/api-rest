

import './App.css'
import AddUser from './components/AddUser';
import List from './components/List'
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import Info from './components/Info'
import { useSelector } from 'react-redux';
import { useState } from 'react';


function App() {
 const [items, setItems] = useState("")
  const {users}=useSelector(state=>state)


  
  return (
    <>
              <AddUser/>

    <Router>
        <Routes>
          <Route path="/Info/:_id" element={<Info items={users}/>}/>
          <Route path="/" element={<List />}/>
          {/* <Route path="/" element={<AddUser/>}/> */}

          </Routes>
      </Router>
        
    </>
  )
}

export default App
