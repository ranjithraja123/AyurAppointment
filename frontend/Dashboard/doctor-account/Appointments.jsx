import React, { useEffect,useState } from 'react'
import { formatDate } from '../../src/utils/formatDate'
import { BASE_URL, token } from '../../src/config.js';

const Appointments = ({doctorData}) => {

  const [appointments, setAppointments] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    console.log(doctorData._id,'papapa')
    if(doctorData.role === 'doctor'){
      doctorAppointment()
    }
  },[])


  
  const doctorAppointment = async () => {
    console.log('111papapa')

    setLoading(true);
    console.log('121papapa')

    try {
        const res = await fetch(`${BASE_URL}/bookings/book/doctor/${doctorData._id}`, {
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
        console.log(data, 'dadadada');
        console.log(appointments, '123qwert');




    } catch (err) {
        setError(err.message);
    } finally {
        setLoading(false);
    }
};



  
  return (
    <div className="container">
    <table className="table table-bordered table-hover">
      <thead className="thead-dark">
        <tr>
          <th className="w-25">Name</th>
          <th className="w-50">Email</th>
          <th className="w-25">Appointment On</th>
          {/* <th className="w-25">Payment</th>
          <th className="w-25">Price</th>
          <th className="w-25">Booked on</th> */}
        </tr>
      </thead>
      <tbody>
        {appointments?.map((appointment) => (
          <tr key={appointment._id}>
            {/* <th scope='row'>
                <div>
                    <div>
                        {appointment.user.name}
                    </div>
                    <div>
                        {appointment.user.email}
                    </div>
                </div>

            </th> */}
          
            <td> {appointment.user.name}</td>
            <td>{appointment.user.email}</td>
            <td>{appointment.appointmentDate.split('T')[0]}</td>

           {/*    <td>{appointment.price}</td>
            <td>{formatDate(item.createdAt)}</td> */}
          </tr>
        ))}
      </tbody>
    </table>
  </div>
  )
}

export default Appointments
