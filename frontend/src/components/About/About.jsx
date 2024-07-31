import React from 'react'
import AboutAyur from "../../assets/images/AyurAbout.png"


const About = () => {
    return <section>
        <div className='row'>
            <div className='col-sm-12 col-lg-6 p-5 d-flex justify-content-center align-items-center'>
                <div className='d-flex justify-content-center align-items-center'>
                    <img className='homeImages rounded-5' src={AboutAyur} alt='About'></img>
                </div>
            </div>
            <div className='col-sm-12 col-lg-6 p-5'>
                <div className='pt-5'>
                    <h2>
                        Proud to be following ancient.....
                    </h2>
                    <p>
                        <h4>
                            Welcome to Neithal Ayurveda and Panchakarma Therapy Center! We are dedicated to providing holistic
                            healing through ancient Ayurvedic practices. Our highly qualified team of doctors has successfully
                            treated over 1000 patients, following the wisdom of ancient
                            scripts                    </h4> </p>

                    <p> <h4>     Personalized Ayurvedic Consultations: Comprehensive assessments to create a customized treatment plan based on your individual constitution (Prakriti) and current imbalances (Vikriti).
                    </h4></p>
                    <p><h4>Panchakarma Therapy: Detoxification and rejuvenation treatments designed to cleanse the body and restore balance.</h4></p>
                    <p><h4>Herbal Medicine: Use of natural herbs and formulations to promote healing and maintain health.</h4></p>
                    <p> <h4>Diet and Lifestyle Counseling: Guidance on Ayurvedic diet and lifestyle practices to support overall well-being.</h4></p>
                    <p><h4>Stress Management: Techniques and therapies to manage stress and improve mental health.</h4></p>
                </div>
            </div>
        </div>
    </section>
}

export default About
