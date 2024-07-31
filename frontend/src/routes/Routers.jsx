import React from 'react';
import Home from '../pages/Home';
import Services from '../pages/Services';
import Login from '../pages/Login';
import Signup from '../pages/Signup';
import Contact from '../pages/Contact';
import Doctors from '../pages/Doctors/Doctors';
import DoctorDetails from '../pages/Doctors/DoctorDetails';
import {Routes,Route} from 'react-router-dom'
import About from '../pages/About';
import Location from '../pages/Location';
import MyAccount from '../../Dashboard/user-account/MyAccount.jsx';
import Dashboard from '../../Dashboard/doctor-account/Dashboard.jsx';
import ProtectedRoute from './ProtectedRoute.jsx';
import CheckOutSuccess from '../pages/CheckOutSuccess.jsx';
const Routers = () => {
  return (
    <Routes>
        <Route path='/' element={<Home />}/>
        <Route path='/home' element={<Home />}/>
        <Route path='/doctors' element={<Doctors />}/>
        <Route path='/aboutUs' element={<About />}/>
        <Route path='/doctors/:id' element={<DoctorDetails />}/>
        <Route path='/login' element={<Login />}/>
        <Route path='/register' element={<Signup />}/>
        <Route path='/contact' element={<Contact />}/>
        <Route path='/services' element={<Services />}/>
        <Route path='/location' element={<Location />}/>
        <Route path='/' element={<Home />}/>
        <Route path='/' element={<Home />}/>
        <Route path='/' element={<Home />}/>
        <Route path='/users/profile/me' element={<ProtectedRoute allowedRoles={['patient']} ><MyAccount /> </ProtectedRoute> }/>
        <Route path='/doctors/profile/me' element={<ProtectedRoute allowedRoles={['doctor']}><Dashboard /></ProtectedRoute>}/>
    <Route path='/checkout-success' element={<CheckOutSuccess />} />
    </Routes>
  )
}

export default Routers
