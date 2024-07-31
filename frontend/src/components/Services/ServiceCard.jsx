import { Link } from '@mui/material'
import React from 'react'
import { FaArrowCircleRight } from 'react-icons/fa'
import '../../pages/pages.css'


const ServiceCard = ({ item, index }) => {
  const { name, desc, bgColor, textColor } = item
  return (
    <div className='serviceCard p-2 rounded-2'>
      <h2  className='service'>{name}</h2>
      {/* <Typography variant="h4" component="h4" align='center'>Make Appointment</Typography> */}

      <h5 className='service'>
        {desc}
      </h5>

      {/* <Link to='/doctors'>
        <FaArrowCircleRight className='qlink' fontSize={50} />
      </Link> */}

    </div>
  )
}

export default ServiceCard
