import React from 'react'
import { doctors } from '../../assets/data/doctors'
import Doctors from './Doctors'
import doctorImg from '../../assets/images/sat.png'
import { HiStar } from "react-icons/hi";
import Box from '@mui/material/Box';
import Tab from '@mui/material/Tab';
import TabContext from '@mui/lab/TabContext';
import TabList from '@mui/lab/TabList';
import TabPanel from '@mui/lab/TabPanel';
import DoctorAbout from './DoctorAbout';
import Feedback from './Feedback';
import SidePanel from './SidePanel';

import { BASE_URL } from '../../config.js';
import useFetchData from '../../hooks/useFetchData.jsx';
import Loader from '../../components/Loader/Loading.jsx';
import Error from '../../components/Error/Error.jsx'
import { useParams } from 'react-router-dom';




const DoctorDetails = () => {

  const [value, setValue] = React.useState('1');

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

const {id} = useParams()

  const { data: doctor, loading, error } = useFetchData(`${BASE_URL}/doctors/${id}`)

  const {
    name,
    qualifications,
    experiences,
    timeSlots,
    reviews,
    bio,
    about,
    averageRating,
    totalRating,
    specialization,
    ticketPrice,
  } = doctor

  return (
    <section>
      {loading && <Loader />}
      {error && <Error />}
      {!loading && !error && (
        <div className='row w-100'>
      
        <div className='col-sm-12 col-lg-4 d-flex justify-content-center'>
          <img className='rounded-5' src={doctorImg} style={{ height: '75%', width: '70%' }} />

        </div>
        <div className='col-lg-5 '>
          {/* <h3 className='' style={{ fontWeight: 'bold' }}>Surgeon</h3> */}
          <div className='d-flex justify-content-start'>

            <h2>{name}</h2>
            <HiStar fontSize={20} color='orange' />
          </div>

          <p style={{ fontSize: 20 }}>
{bio}          </p>
        </div>

        <div className='col-lg-3 '>
          <SidePanel doctor={doctor}/>
        </div>




      </div>
      )} 
      
      <div className='row w-50 d-flex justify-content-center m-auto'>
        <Box sx={{ width: '100%', typography: 'body1' }}>
          <TabContext value={value}>
            <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
              <TabList onChange={handleChange} aria-label="lab API tabs example">
                <Tab label="About" value="1" />
                <Tab label="Feedback" value="2" />
              </TabList>
            </Box>
            <TabPanel value="1"><DoctorAbout experiences={experiences} about={about} qualifications={qualifications}/></TabPanel>
            <TabPanel value="2"><Feedback /></TabPanel>
          </TabContext>
        </Box>
      </div>

     

    </section>
  )
}

export default DoctorDetails
