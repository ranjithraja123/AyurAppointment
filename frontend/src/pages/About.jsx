import React from 'react'
import AboutAyur from "../assets/images/aboutayurvedha.png"
import AboutHead from "../assets/images/abouthead.png"



const About = () => {
    return <section className='p-5'>
        <div className='row aboutus shadow-lg p-3 mb-5 '>
            {/* <div className='col-sm-12 col-lg-6 p-5 d-flex justify-content-center align-items-center'>
                <div className='d-flex justify-content-center align-items-center'>
                    <img className='homeImages rounded-5' src={AboutAyur} alt='About'></img>
                </div>
            </div> */}

            <div className='col-12 d-flex justify-content-center'>
                <img className='w-50 m-auto' src={AboutHead} alt='about' />
            </div>
            <div className="d-flex justify-content-center align-items-center">
                <div className="text-center " style={{ color: 'white' }}>
                    <h1>About Us</h1>

                </div>
            </div>
            <div className='col-6 px-5 pb-5 d-flex justify-content-center mt-5' style={{ fontFamily: 'Sanchez' }}>
                <div className=' w-100' style={{ color: 'white' }}>

                    <p>
                        <h4>
                            Welcome to Neithal Ayurveda and Panchakarma Therapy Center! We are dedicated to providing holistic
                            healing through ancient Ayurvedic practices. Our highly qualified team of doctors has successfully
                            treated over 1000 patients, following the wisdom of ancient
                            scripts.
                        </h4> </p>
                    <h3>Our Vision</h3>
                    <p><h4>
                        At Neithal, we believe in the power of nature and the body
                        ’
                        s innate ability to heal itself. Our vision is to
                        promote well
                        -
                        being, balance, and vitality by integrating traditional Ayurvedic knowledge with modern
                        practices.</h4></p>
                    <h3>Our Team</h3>
                    <p><h4>

                        Our team of experienced Ayurvedic doctors is passionate about restoring harmony and balance in your
                        life. With deep knowledge and compassionate care, they guide you
                        on your wellness journey.


                    </h4></p>


                </div>

            </div>
            <div className='col-6 px-5 pb-5 d-flex justify-content-center mt-5' style={{ fontFamily: 'Sanchez' }}>
                <div className=' w-100' style={{ color: 'white' }}>


                    <h3>Why Choose Neithal?
                    </h3>
                    <p><h4>
                        <p>                        Authenticity: We follow ancient Ayurvedic texts and practices, ensuring authenticity in our treatments.
                        </p>
                        <p></p>
                        <p>                        Results: Our track record of successful treatments speaks for itself.
                        </p>
                        <p>                        Personalized Care: Each patient receives personalized attention and a customized treatment plan.

                        </p>
                        <p>Holistic Approach: We address not only physical symptoms but also mental and emotional well
                            -
                            being.</p>
                        <p>
                            Join us at Neithal Ayurveda and experience the transformative power of Ayurveda. Contact us to
                            day to
                            schedule a consultation</p>

                    </h4>
                    </p>
                </div>

            </div>
        </div>
    </section>
}

export default About
