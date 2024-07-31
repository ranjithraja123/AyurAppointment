import React, { useState } from 'react';
import userImg from '../../src/assets/images/doctor-img01.png'
import { Button } from '@mui/material';
import { useContext } from 'react'
import { authContext } from '../../src/context/AuthContext.jsx'
import MyBookings from "./MyBooking.jsx"
import Profile from "./Profile.jsx"
import useGetProfile from '../../src/hooks/useFetchData.jsx'
import { BASE_URL } from "../../src/config.js"
import Loading from '../../src/components/Loader/Loading.jsx';
import Error from '../../src/components/Error/Error.jsx';

const MyAccount = () => {
    const { dispatch } = useContext(authContext);
    const [tab, setTab] = useState('bookings')

    const { data: userData, loading, error } = useGetProfile(`${BASE_URL}/users/profile/me`)

    console.log(userData, 'userData')

    const handleLogout = () => {
        dispatch({ type: 'LOGOUT' });
    }


    return (
        <section>


            <div>
                {loading && !error && <Loading />}
                {error && !loading && <Error errMessage={error} />}
                {!loading && !error && (
                    <div className='row'>
                        <div className='col-6 d-flex flex-column align-items-center text-center p-5'>
                            <div>
                                <figure>
                                    <img src={userImg} className='w-25' alt="" />
                                </figure>
                            </div>
                            <div>
                                <h3>{userData.name}</h3>
                                <p>{userData.email}</p>
                                <p>Blood Type: {""}
                                    <span>O-ve </span>
                                </p>
                            </div>
                            <div className='mb-2'>
                                <button className='btn btn-success w-25 px-2' onClick={handleLogout}>
                                    Logout
                                </button>
                                {/* <button className='btn btn-success w-25'>
                                    Delete Account
                                </button> */}
                            </div>
                            <div>
                            <button className='btn btn-success w-25'>
                                    Delete Account
                                </button>
                            </div>
                        </div>



                        <div className='col-6'>
                            <div className='row'>
                                <button
                                    onClick={() => setTab('bookings')}
                                    className={`col-6 w-25   btn ${tab === 'bookings' ? 'btn-primary' : 'btn-secondary'}`}>
                                    My Bookings
                                </button>
                                <button
                                    onClick={() => setTab('settings')}
                                    className={`col-6 ml-3 w-25 btn ${tab === 'settings' ? 'btn-primary' : 'btn-secondary'}`}>
                                    Profile Settings
                                </button>
                            </div>
                            {
                                tab === 'bookings' && <MyBookings user={userData} />
                            }
                            {
                                tab === 'settings' && <Profile user={userData} />
                            }
                        </div>


                    </div>
                )}
            </div>
        </section>

    )
}

export default MyAccount
