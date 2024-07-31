import React, { useEffect } from 'react'
// import { doctors } from '../../assets/data/doctors'
import DoctorCard from './DoctorCard'
import { Card, CardContent, Typography, CardMedia } from '@mui/material';
import { FaArrowCircleRight } from "react-icons/fa";
import { Link } from 'react-router-dom';
import '../../pages/pages.css'
import { BASE_URL } from '../../config.js';
import useFetchData from '../../hooks/useFetchData.jsx';
import Loader from '../../components/Loader/Loading.jsx';
import Error from '../../components/Error/Error.jsx'


const DoctorList = ({doctor}) => {

  const { data: doctors, loading, error } = useFetchData(`${BASE_URL}/doctors`)


  useEffect(() => {
    console.log(doctors,'docdoc')
  },[])
  return (
    <>
      {loading && <Loader />}
      {error && <Error />}
      {!loading && !error && <div className='d-flex px-5 d-flex justify-content-center align-items-center'>
        {doctors.map((doctor, id) => (
          <Card className='rounded-5' variant="outlined" style={{ margin: '10px', width: '20%' }}>
            {/* <CardMedia
   component="img"
   height="300"
   width="100"
   image={doctor.photo}
   alt={doctor.name}
 /> */}
            <CardContent>
              <Typography variant="h5" component="div">
                {doctor.name}
              </Typography>
              <Typography variant="body2" color="text.secondary">
                Specialty: {doctor.specialization}
              </Typography>
              <Typography variant="body2" color="text.secondary">
                Hospital: {doctor?.experiences[0]?.position}
              </Typography>

            </CardContent>

            <Link to={`/doctors/${doctor._id}`}>
              <FaArrowCircleRight className='qlink mt-3 mb-3' fontSize={50} style={{ color: 'green' }} />
            </Link>

          </Card>
        ))}


      </div>}

    </>
  )
}

export default DoctorList
