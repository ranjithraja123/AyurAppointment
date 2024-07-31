import React, { useEffect, useRef, useContext } from 'react'
import logo from '../../assets/images/test logo.png';
import { NavLink, Link } from 'react-router-dom';
import PersonIcon from '@mui/icons-material/Person';
import { BiAccessibility } from "react-icons/bi";
import { margin } from '@mui/system';
import { authContext } from '../../context/AuthContext.jsx';

const navLinks = [
    {
        path: '/home',
        display: 'Home'
    },
    // {
    //     path: '/doctors',
    //     display: 'Appointment'
    // },
    //  {
    //     path: '/services',
    //     display: 'Services'
    // },
     {
        path: '/aboutUs',
        display: 'About'
    },
    {
        path: '/location',
        display: 'Contact'
    }

]
const Header = () => {

    const {user, role, token} = useContext(authContext)
    
    useEffect(() =>{
        console.log(user,'1234')
    },[user])    
    return (
        // <div className='header'>
        // <div className='header mb-4'>
            <div className='row w-100 p-3 d-flex justify-content-between text-white' style={{background:'transparent' }}>
                <div className='col-4 d-flex  align-items-center pl-5 '>
                    {/* <Link to='/'>
                    <img  src={logo} alt='' style={{ height: "110%", width: "30%" }} />

                    </Link> */}

                    {/* <div className='d-flex align-items-center'>                    
                        <h1 className='mt-1 display-3' style={{marginLeft:"30px", color:"#1A4D2E"}}>Neithal Ayurvedha</h1>
                    </div> */}
                </div>

                <div className='col-3 mt-2 navigation d-flex' style={{marginLeft:'380px'}}>
                    <ul className='d-flex ' style={{ listStyleType: 'none', padding: 0, fontSize: '22px', fontWeight: 'bold' }}>
                        {navLinks.map((link) => (
                            <li  key={link.path} style={{ textDecoration: 'none' }}>
                                <NavLink
                                    to={link.path}
                                    activeClassName="active" // Add your active class name here
                                    isActive={(match, location) => {
                                        if (!match) return false;
                                        // Additional logic to determine if the link should be considered active
                                        return true;
                                    }}
                                    style={{ textDecoration: 'none', color: '#1A4D2E', fontSize:"25px", }}
                                >
                                    {link.display}
                                </NavLink>
                            </li>
                        ))}
                    </ul>
                </div>

                {token && user? (
                    <div className='col-2 d-flex justify-content-center align-items-center'>
                        <Link to={`${role === "doctor"?"/doctors/profile/me":"/users/profile/me"}`}>
                        <h3 className='text-dark'>Hi, {user?.name}</h3>
                        </Link>
                    </div>

                ):(
                    <div className='col-2 d-flex justify-content-center align-items-center'>

                    <Link to='login'>
                        <div className='d-flex justify-content-end'> <button className='btnlink btn w-50 '>
                            Login
                        </button></div>
                       
                    </Link>

                </div>
                ) }

               

                <span className='col-1 d-flex align-items-center d-block d-md-none'>


                    <BiAccessibility size={40} />

                </span>



                <div>

                </div>


            </div>
        // </div>



    )
}

export default Header
