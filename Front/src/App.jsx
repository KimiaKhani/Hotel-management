import { useState } from 'react'
import './App.css'
import {BrowserRouter,Route,Routes} from 'react-router-dom'
import AdminDashboard from './Components/admin/Dashboard/Dashboard'
import SignIn from './Components/SignIn/SignIn'
import SearchBar from './Components/admin/rooms/Searchbar'
function App() {
  const [count, setCount] = useState(0)

  return (
    <>
       <BrowserRouter>
        <Routes>
            {/* <Route path='/' element={<Rooms/>} /> */}
            <Route path='/search' element={< SearchBar/>} />
            <Route path='/admin' element={< AdminDashboard />} />
            <Route path='/' element={< SignIn/>} />
        </Routes>
      </BrowserRouter>
  
    </>
  )
}

export default App
