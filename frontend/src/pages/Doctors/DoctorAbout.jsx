import React from 'react'
import { formatDate } from '../../utils/formatDate'

const DoctorAbout = ({ name, about, qualifications, experiences }) => {
    return (
        <>
            <div>
                <h3>About of</h3>
                <span>{name}</span>
                <p>
                    {about}
                </p>
            </div>
            <div className='row'>
                <h2 style={{ textDecoration: 'underline' }}>
                    Education
                </h2>
                {qualifications?.map((item, index) => (
                    <div key={index} className='row'>
                        <div className='col-lg-6'>
                            <span>{formatDate(item.startingDate)} - {formatDate(item.endingDate)}</span>
                            <h3>{item.degree}</h3>
                        </div>
                        <div className='col-lg-6'>
                            <h3>{item.university}</h3>
                        </div>
                    </div>
                ))}



            </div>

            <hr></hr>
            <div className='row'>
                <h2 style={{ textDecoration: 'underline' }}>
                    Experience
                </h2>

                {experiences?.map((item, index) => (
                    <div className='row' key={index}>
                        <div className='col-lg-6'>
                            <span>{formatDate(item.startingDate)} - {formatDate(item.endingDate)}</span>
                            <h3>{item.position}</h3>
                        </div>
                        <div className='col-lg-6'>
                            <h3>{item.hospital}</h3>
                          
                        </div>
                    </div>
                ))}




            </div>
        </>
    )
}

export default DoctorAbout
