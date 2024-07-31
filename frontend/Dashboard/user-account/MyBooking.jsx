import React, { useEffect, useState } from 'react';
import { BASE_URL, token } from '../../src/config';
import DoctorCard from '../../src/components/Doctor/DoctorCard.jsx';
import Loading from '../../src/components/Loader/Loading.jsx';
import useFetchData from '../../src/hooks/useFetchData.jsx';
import Error from '../../src/components/Error/Error.jsx';

const MyBooking = ({ user }) => {
    const [appointments, setAppointments] = useState([]);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);

    useEffect(() => {
        if (user?.role === 'patient') {
            patientAppointment();
        } else if(user?.role === 'doctor') {
            doctorAppointment();
        }
    }, [user]);

    const patientAppointment = async () => {
        setLoading(true);
        try {
            const res = await fetch(`${BASE_URL}/bookings/book/${user._id}`, {
                method: 'GET',
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': `Bearer ${token}`
                }
            });
            console.log(res,'qwertyqw')

            if (!res.ok) {
                throw new Error('Network response was not ok');
            }
            console.log(res,'qwertyqw1')



            const data = await res.json();
            setAppointments(data);
            console.log(appointments, '123qwert');
            console.log(data, 'dadadada');



        } catch (err) {
            setError(err.message);
        } finally {
            setLoading(false);
        }
    };


    return (
        <div>
            {loading && !error && <Loading />}
            {error && !loading && <Error errMessage={error} />}
            {!loading && !error && appointments.length > 0 && (
                <div>
                    {appointments.map(appointment => (
                        <DoctorCard key={appointment._id} appointment={appointment} />
                    ))}
                </div>
            )}
            {!loading && !error && appointments.length === 0 && (
                <h2>You did not book any doctor yet!</h2>
            )}
        </div>
    );
};

export default MyBooking;
