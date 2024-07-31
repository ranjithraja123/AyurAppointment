import React from 'react'
import { Box, Button, Card, Container, TextField, Typography } from '@mui/material';


const Location = () => {
    return (
        <div className='row w-75 m-auto border rounded-4 px-2 pt-4 mb-5' style={{ backgroundColor: 'rgba(0, 0, 0, 0.5)' }}>
            <div className='col-7 py-4'>
                <Typography variant="h4" gutterBottom align="center" color="white">
                    Contact us
                </Typography>
                <Typography variant="h5" gutterBottom align="center" color="white">
                    Neithal Ayurveda Clinic, Pharmacy & Panchakarma Treatment Centre                </Typography>

                <Typography className='px-5' variant="h5" gutterBottom color="white">
                    Address
                </Typography>
                <Typography className='px-5' variant="h3" gutterBottom color="white">
                    <p style={{ fontSize: '18px', fontStyle: 'italic' }}>83, Chetty Street, Heritage Town, beside Mahatma Gandhi Road, Junction, Puducherry, 605001</p>
                </Typography>
                <hr></hr>
                <Typography className='px-5' variant="h5" gutterBottom color="white">
                    Call us on
                </Typography>
                <Typography className='px-5' variant="h3" gutterBottom color="white">
                    <p style={{ fontSize: '18px', fontStyle: 'italic' }}>+91-9488023328</p>
                </Typography>
                <hr></hr>
                <Typography className='px-5' variant="h5" gutterBottom color="white">
                   Email
                </Typography>
                <Typography className='px-5' variant="h3" gutterBottom color="white">
                    <p style={{ fontSize: '18px', fontStyle: 'italic' }}>contact@neithalayurvedha.in</p>
                </Typography>


            </div>
            <div className='col-5 py-5 ' >
                <iframe src="https://www.google.com/maps/embed?pb=!1m23!1m12!1m3!1d124913.19639117456!2d79.74746742542978!3d11.937249008810484!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!4m8!3e6!4m0!4m5!1s0x3a536136941656e1%3A0x3ad7b211ee82d965!2s83%2C%20Chetty%20Street%2C%20Heritage%20Town%2C%20beside%20Mahatma%20Gandhi%20Road%2C%20Junction%2C%20Puducherry%2C%20605001!3m2!1d11.937261!2d79.8298693!5e0!3m2!1sen!2sin!4v1718300495168!5m2!1sen!2sin" width="100" height="400" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>

            </div>

        </div>
    )
}

export default Location
