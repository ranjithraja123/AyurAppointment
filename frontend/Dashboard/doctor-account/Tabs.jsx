import React from 'react'
import { BiMenu } from 'react-icons/bi'
import { useContext } from 'react'
import { authContext } from '../../src/context/AuthContext.jsx'
import { useNavigate } from 'react-router-dom'
import { Card, CardContent, Button, Typography } from '@mui/material';



const Tabs = ({ tab, setTab }) => {

    const { dispatch } = useContext(authContext)
    const navigate = useNavigate()

    const handleLogout = () => {
        dispatch({ type: 'LOGOUT' })
        navigate('/')
    }


    return (
        <div>
            {/* <span><BiMenu /></span> */}
            <div className='row d-flex flex-column align-items-center'>
                <button onClick={() => {
                    setTab('overview')
                }} className={`mb-3 w-50 btn ${tab === 'overview' ? 'btn-primary' : 'btn-secondary'}`}>
                    Overview
                </button>
                <button
                    onClick={() => {
                        setTab('appointments')
                    }} className={`mb-3 w-50 btn ${tab === 'appointments' ? 'btn-primary' : 'btn-secondary'}`}>
                    Appointments
                </button>
                <button onClick={() => {
                    setTab('settings')
                }} className={`mb-3 w-50 btn ${tab === 'settings' ? 'btn-primary' : 'btn-secondary'}`}>
                    Profile
                </button>
            </div>
            <div className='mb-2 d-flex justify-content-center'>
                <button className='btn btn-success w-25 px-1' onClick={handleLogout}>
                    Logout
                </button>
            </div>
            <div className='mb-2 d-flex justify-content-center'>
                <button className='btn btn-success w-25'>
                    Delete Account
                </button>
            </div>
        </div>
    )
}

export default Tabs
