import React from 'react'
import '../../pages/pages.css'
import { Link } from 'react-router-dom'
import logo from '../../assets/images/test logo.png';
import { FaFacebook, FaInstagramSquare, FaYoutube } from "react-icons/fa";

const socialLinks = [
  {
    path: "/",
    icon: <FaYoutube fontSize={80} />
  },
  {
    path: "/",
    icon: <FaInstagramSquare fontSize={80}/>
  },
  {
    path: "/",
    icon: <FaFacebook fontSize={80}/>
  },
]


const quickLinks = [
  {
    path: "/",
    display: "Home"
  },
  {
    path: "/",
    display: "About Us"
  }, {
    path: "/",
    display: "Services"
  }, {
    path: "/",
    display: "Blog"
  },

]

const quickLinks2 = [
  {
    path: "/",
    display: "Find A Doctor"
  },
  {
    path: "/doctors",
    display: "Request an  Appointment"
  }, {
    path: "/",
    display: "Find A Location"
  }, {
    path: "/",
    display: "Get an option"
  },
]


const Footer = () => {
  const year = new Date().getFullYear()

  return (
    // <div className="container">
    <footer className='d-none d-lg-block' >
      <div className="row justify-content-center footer py-3" style={{ paddingLeft: "100px", paddingRight: "100px" }}>
        {/* <div className="col-4">
          <img src={logo} style={{ width: "300px", height: "300px", marginLeft: "100px" }} />
        </div> */}
        <div className="col-6 d-flex align-items-center" >
          {/* <div className='d-flex ml-5 px-5'>
            <div className='col-6'>
              {quickLinks.map((items, index) =>
                <li className='quick' key={index}>
                  <h3 className='mt-5'><a className='qlink' href={items.path} style={{ textDecoration: 'none' }}>{items.display}</a></h3>
                </li>
              )}
            </div>
            <div className='col-6'>
              {quickLinks2.map((items, index) =>
                <li className='quick' key={index}>
                  <h4 className='mt-5'><a className='qlink' href={items.path} style={{ textDecoration: 'none' }}>{items.display}</a></h4>
                </li>
              )}
            </div>
          </div> */}
          {/* <div>
          <img src={logo} style={{ width: "100px", height: "100px", marginLeft: "100px" }} />

          </div> */}
          <div>
          <h6>Copyright  © {year} Capital Technologies Private Limited</h6>

          </div>


        </div>
        <div className="col-6 d-flex align-items-center">
          
          <div className='d-flex align-items-center'>
            {/* <h3>Contact Us:</h3> */}
            <div >
            <p className='h5'>Mobile Number:<a style={{color:'white'}} href="whatsapp://send?text=">+91-8144797928</a></p>
            <p className='h5'>Email-Id:<a>contact@neidhalayurvedha.com</a></p>
            </div>
            
          </div>
        </div>
        {/* <div className="col-4">
          <div className='d-flex'>
            {socialLinks.map((icons, index) =>
              <h4 className='mt-5'><a className='qlink' href={icons.path} style={{ textDecoration: 'none' }}>{icons.icon}</a></h4>

            )}
          </div>
        </div> */}
      </div>
    </footer>
  )
}

export default Footer
