import React from 'react'
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import { doctors } from '../../assets/data/doctors';
import DoctorCard from '../../components/Doctor/DoctorCard';
import DoctorList from '../../components/Doctor/DoctorList';
import Testimonial from '../../components/Testimonial/Testimonial';
import '../../pages/pages.css'

const Doctors = () => {
  return (
    <>
      <section>
        <div className='row'>
          <div className='col-sm-12 col-lg-12 '>
            <h2 className='d-flex justify-content-center'>
              Find a doctor
            </h2>
          </div>

          {/* <div className='col-sm-12 col-lg-12 '>
            <Box
              className='d-flex justify-content-center'
              component="form"
              sx={{
                '& > :not(style)': { m: 1, width: '100ch' },
              }}
              noValidate
              autoComplete="off"
            >
              <TextField id="filled-basic" label="Filled" variant="filled" />
            </Box>

            <div className='d-flex justify-content-center'>
              <button type="button" className="btn btn-success w-25 d-flex justify-content-center">Success</button>
            </div>


          </div> */}
        </div>
      </section>
      <section className='mt-3 '>

        <DoctorList />

      </section>

      <section className='mb-3'>
        <section className="d-flex justify-content-center align-items-center">
          <div className="text-center">
            <h2>What Our Patients say</h2>
            <p>Unmatched Health Care</p>
          </div>
        </section>
        <div className='px-5'>
          <Testimonial />
        </div>
      </section>
    </>
  )
}

export default Doctors
