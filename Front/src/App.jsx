import { useState } from 'react'
import './App.css'
import {BrowserRouter,Route,Routes} from 'react-router-dom'
import Rooms from './Components/Rooms/Rooms'
import AdminDashboard from './Components/admin/Dashboard/Dashboard'
import Login from './Components/login/Login'
import SignIn from './Components/SignIn/SignIn'
function App() {
  const [count, setCount] = useState(0)

  return (
    <>
       <BrowserRouter>
        <Routes>
            <Route path='/' element={<Rooms/>} />
            <Route path='/Login' element={< Login/>} />
            <Route path='/admin' element={< AdminDashboard />} />
            <Route path='/Login2' element={< SignIn/>} />
        </Routes>
      </BrowserRouter>
  
    </>
  )
}

export default App
