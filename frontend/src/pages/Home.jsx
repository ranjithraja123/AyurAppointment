import React from 'react'
import '../pages/pages.css'
import medi from "../../src/assets/images/medi.png"
import FindADoctor from '../assets/images/findoc.png'
// import FindADoctor from '../assets/images/tel.png'

import Virtual from '../assets/images/onlinecon.png'
import { FaArrowCircleRight } from "react-icons/fa";
import { Link } from 'react-router-dom';
import Location from '../assets/images/Location.png';
import Appointment from '../assets/images/appointcal.png';
import { Card, CardContent, Typography, CardMedia } from '@mui/material';
import About from '../components/About/About';
import ServiceList from '../components/Services/ServiceList';
import Testimonial from '../components/Testimonial/Testimonial'
import CountUp from 'react-countup';



const Home = () => {
    return (
        <>
            <section className="hero is-fullheight">
                <div className='row'>
                    <div className='col-lg-12 col-12 d-flex flex-column align-items-center justify-content-center'>
                        <div className='col-lg-7 col-12'>
                            <div className='mt-5'>
                                <h1 className='display-4 text-center'>
                                    We help patients live a healthy, longer life.
                                </h1>
                                <p className='mt-5'>
                                    <h3 className='text-center' style={{ fontStyle: 'italic' }}>
                                        Ayurveda, often referred to as the "science of life," is an ancient holistic healing system that originated in India over 5,000 years ago. It emphasizes the balance of the mind, body, and spirit to promote overall health and well-being. Central to Ayurvedic philosophy is the belief that each person is unique, with their own individual constitution or "prakriti," which is determined by a balance of the three fundamental energies known as "doshas" (Vata, Pitta, and Kapha). Ayurvedic treatments aim to restore and maintain this balance through various means, including herbal remedies, dietary adjustments, yoga, meditation, and lifestyle practices. Ayurveda is not just a system of medicine but a way of life that encourages harmony with nature and the understanding that health is a dynamic interplay between the environment, body, mind, and spirit.
                                    </h3>
                                </p>
                                <Link to='/doctors'>
                                {/* <section className="d-flex justify-content-center align-items-center">
                                    <div className="text-center">
                                        <button className='btnlink mt-5 btn p-2 w-50'><h5>Request an Appointment</h5></button>

                                    </div>
                                </section> */}

                                </Link>

                            </div>
                        </div>
                        {/* <div className='mt-5 d-flex align-items-center justify-content-center text-center w-50'>
                            <div className='mx-3'>
                                <h2>
                                    <CountUp start={1} end={30} duration={5} suffix="+" />
                                </h2>                                <span></span>
                                <p>Years of Experience</p>
                            </div>
                            <div className='mx-3'>
                                <h2>
                                    <CountUp start={1} end={30} duration={5} suffix="+" />
                                </h2>                                  <span></span>
                                <p>Years of Experience</p>
                            </div>
                            <div className='mx-3'>
                                <h2>
                                    <CountUp start={1} end={30} duration={5} suffix="+" />
                                </h2>                                  <span></span>
                                <p>Years of Experience</p>
                            </div>
                        </div> */}
                    </div>
                    {/* <div className='col-lg-6 col-12 d-flex justify-content-center'>
                        <img src={medi} className='img-fluid' style={{ animation: "floatAnimation 3s infinite" }} alt="Medical" />
                    </div> */}
                </div>

                <section className='py-5 px-5'>
                    <div className='d-flex justify-content-center align-items-center flex-column'>

                        <div className="d-flex justify-content-center align-items-center">
                            <div className="text-center">
                                <p>
                                    <h1 className='text-bold'>Providing Best Medical Services</h1>
                                </p>
                            </div>
                        </div>
                        <div className='row w-75 ' >
                            <div className='col-lg-4 col-md-6 col-12 mb-4  d-flex justify-content-center'>
                                <Card className='rounded-5 w-100' style={{ background: 'transparent' }}>
                                    <CardMedia
                                        component="img"
                                        height="300"
                                        width="100"
                                        image={FindADoctor}
                                    // alt={doctor.name}
                                    />
                                    <CardContent className='cards'>
                                        {/* <div className='d-flex'>
                                            <img src={Appointment} className='img-fluid' alt="Make an Appointment" />
                                        </div> */}
                                        {/* <div className='cardText py-2'> */}
                                        {/* <div className='d-flex justify-content-center '>
                                                <div className='w-75' style={{ color: 'white' }}> */}
                                        <Typography variant="h4" component="h4" align='center'>Find Doctor</Typography>
                                        <Typography component="h6" color={'white'} fontStyle={'italic'} fontSize={18} >
                                            The doctor of the future will give no medicine but will interest his patients in the care of the human frame, in diet, and in the cause and prevention of disease.
                                        </Typography>
                                        {/* </div>
                                            </div> */}
                                        <Link to='/doctors'>
                                            <FaArrowCircleRight className='qlink mt-3' fontSize={50} />
                                        </Link>
                                        {/* </div> */}

                                    </CardContent>
                                </Card>
                            </div>

                            <div className='col-lg-4 col-md-6 col-12 mb-4  d-flex justify-content-center'>
                                <Card className='rounded-5 w-100' style={{ background: 'transparent', width: '70%' }}>
                                    <CardMedia
                                        component="img"
                                        height="300"
                                        width="100"
                                        image={Location}
                                    // alt={doctor.name}
                                    />
                                    <CardContent className='cards'>
                                        {/* <div className='d-flex'>
                                            <img src={Appointment} className='img-fluid' alt="Make an Appointment" />
                                        </div> */}
                                        {/* <div className='cardText py-2'> */}
                                        {/* <div className='d-flex justify-content-center '>
                                                <div className='w-75' style={{ color: 'white' }}> */}
                                        <Typography variant="h4" component="h4" align='center'>Find Location</Typography>
                                        <Typography color={'white'} fontSize={18} fontStyle={'italic'}>
                                            The doctor of the future will give no medicine but will interest his patients in the care of the human frame, in diet, and in the cause and prevention of disease.
                                        </Typography>
                                        {/* </div>
                                            </div> */}
                                        <Link to='/location'>
                                            <FaArrowCircleRight className='qlink mt-3' fontSize={50} />
                                        </Link>
                                        {/* </div> */}

                                    </CardContent>
                                </Card>
                            </div>
                            <div className='col-lg-4 col-md-6 col-12 mb-4  d-flex justify-content-center'>
                                <Card className='rounded-5 w-100' style={{ background: 'transparent', width: '70%' }}>
                                    <CardMedia
                                        component="img"
                                        height="300"
                                        width="100"
                                        image={Appointment}
                                    // alt={doctor.name}
                                    />
                                    <CardContent className='cards'>
                                        {/* <div className='d-flex'>
                                            <img src={Appointment} className='img-fluid' alt="Make an Appointment" />
                                        </div> */}
                                        {/* <div className='cardText py-2'> */}
                                        {/* <div className='d-flex justify-content-center '>
                                                <div className='w-75' style={{ color: 'white' }}> */}
                                        <Typography variant="h4" component="h4" align='center'>Make Appointment</Typography>
                                        <Typography color={'white'} fontSize={18} fontStyle={'italic'}>
                                            The doctor of the future will give no medicine but will interest his patients in the care of the human frame, in diet, and in the cause and prevention of disease.
                                        </Typography>
                                        {/* </div>
                                            </div> */}
                                        <Link to='/makeAnAppointment'>
                                            <FaArrowCircleRight className='qlink mt-3' fontSize={50} />
                                        </Link>
                                        {/* </div> */}

                                    </CardContent>
                                </Card>
                            </div>
                        </div>
                    </div>
                </section>
            </section>
            {/* 
            <section>
                <About />
            </section> */}

            <section className='py-5'>
                <section className="d-flex justify-content-center align-items-center">
                    <div className="text-center">
                        <h1 className='text-bold'>Our Medical Services</h1>
                        <p>Unmatched Health Care</p>
                    </div>
                </section>
                <div>
                    <ServiceList />
                </div>
            </section>


            <section className='online'>
                <div className='row px-5'>
                    <div className="col-lg-6 col-12 mt-5 d-flex flex-column  align-items-center text-center">
                        <div className='mt-5'>
                            <h2>
                                Get Online Consultation <br /> Anytime.
                            </h2>
                            <ul className="list-unstyled mt-5">
                                <li><h4>1. Schedule an Appointment</h4></li>
                                <li><h4>2. Search for your physician</h4></li>
                                <li><h4>3. Scheduling tool to select an appointment</h4></li>
                            </ul>
                            <Link to="/aboutUs">
                                <button className="btn btn-success w-50 mt-5"><h4>About us</h4></button>
                            </Link>
                        </div>
                    </div>

                    <div className='col-lg-6 col-12 p-5 d-flex justify-content-center align-items-center'>
                        <div className='d-flex justify-content-center align-items-center'>
                            <img className='rounded-5 homeImages img-fluid' style={{ width: '500px', height: '500px' }} src={Virtual} alt="Virtual Treatment" />
                        </div>
                    </div>
                </div>
            </section>

            <section className='mb-3 online mt-lg-n5'>
                {/* <section className="d-flex justify-content-center align-items-center">
                    <div className="text-center">
                        <h1 className='text-bold'>What Our Patients say</h1>
                        <p>Unmatched Health Care</p>
                    </div>
                </section> */}
                <div className='px-5'>
                    <Testimonial />
                </div>
            </section>
        </>
    )
}

export default Home
