import { useState } from 'react'
import './App.css'
import {BrowserRouter,Route,Routes} from 'react-router-dom'
import Rooms from './Components/Rooms/Rooms'
import AdminAllCustomersPage from './Components/admin/users/adminUsers'
import AdminAllRoomsPage from './Components/admin/rooms/adminRoom'
import AdmingAddRoomsPage from './Components/admin/addRooms/AddRoom'
import AdminDashboard from './Components/admin/Dashboard/Dashboard'
function App() {
  const [count, setCount] = useState(0)

  return (
    <>
       <BrowserRouter>
        <Routes>
            <Route path='/' element={<Rooms/>} />
            <Route path='/adminUsers' element={<AdminAllCustomersPage/>} />
            <Route path='/adminRooms' element={< AdminAllRoomsPage />} />
            <Route path='/adminAddRooms' element={< AdmingAddRoomsPage />} />
            <Route path='/admin' element={< AdminDashboard />} />
        </Routes>
      </BrowserRouter>
  
    </>
  )
}

export default App
