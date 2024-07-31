import React from 'react';
import { Card, CardContent, Typography, CardMedia } from '@mui/material';


const DoctorCard = ({ appointment }) => {

  
  return (
    <div>
      {/* <h3>{appointment.doctor.name}</h3> */}

      <Card className='rounded-5' variant="outlined" style={{ margin: '10px', width: '50%' }}>
            {/* <CardMedia
   component="img"
   height="300"
   width="100"
   image={doctor.photo}
   alt={doctor.name}
 /> */}
            <CardContent>
              <Typography variant="h5" component="div">
                {appointment.doctor.name}
              </Typography>
              <Typography variant="body2" color="text.secondary">
                Specialty: {appointment.doctor.specialization}
              </Typography>
              {/* <Typography variant="body2" color="text.secondary">
                Hospital: {doctor?.experiences[0]?.position}
              </Typography> */}

            </CardContent>

            {/* <Link to={`/doctors/${doctor._id}`}>
              <FaArrowCircleRight className='qlink mt-3 mb-3' fontSize={50} style={{ color: 'green' }} />
            </Link> */}

          </Card>
    </div>
  );
};

export default DoctorCard;
