import React, { useState } from 'react';
import { Box, Button, Card, Container, TextField, Typography, FormControl, InputLabel, MenuItem, Select } from '@mui/material';
import { Link, useNavigate } from 'react-router-dom';
import { styled, keyframes } from '@mui/system';
import { Form } from 'react-bootstrap';
import avatar from '../assets/images/doctor-img01.png'
import { BASE_URL } from '../config';
import { toast } from 'react-toastify';
import {HashLoader} from 'react-spinners'

// Define the keyframes for the twist animation
const twist = keyframes`
  0% {
    transform: rotateY(0deg);
  }
  50% {
    transform: rotateY(70deg);
  }
  100% {
    transform: rotateY(0deg);
  }
`;

// Apply the animation to the Card component
const AnimatedCard = styled(Card)`
  background-color: rgba(0, 0, 0, 0.4);
  padding: 32px;
  border-radius: 16px;
  width: 500px;
  animation: ${twist} 1s ease-in-out;
`;

const Signup = () => {
  const [selectedFile, setSelectedFile] = useState(null);
  const [previewURL, setPreviewURL] = useState("");
  const [loading,setLoading] = useState(false)


  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    photo: selectedFile,
    gender: "",
    role: "patient"
  })

  const navigate = useNavigate()


  const handleInputChange = (e) => {
    setFormData({...formData, [e.target.name]: e.target.value});
  }

  const handleFileInputChange = async event => {
    const file = event.target.files[0];
    console.log(file,'filesrhere')

  }


  const submitHandler = async event => {
    
    event.preventDefault()
    setLoading(true)

    try {
      const res = await fetch(`${BASE_URL}/auth/register`,{
        method: 'post',
        headers:{
          'Content-Type':'application/json'
        },
        body: JSON.stringify(formData)
      })
      const {message} = await res.json()

      if(!res.ok){
        throw new Error(message)
      }
      setLoading(false)
      toast.success(message)
      navigate('/login')
    } catch (err) {
      toast.error(err.message)
      setLoading(false)
    }
  }



  // const [role, setRole] = React.useState('');

  // const handleChange = (event) => {
  //   setRole(event.target.value);
  // };
  return (
    <Container className="">
      <Box display="flex" justifyContent="center" alignItems="center" minHeight="100vh">
        <AnimatedCard>
          <Box display="flex" flexDirection="column" alignItems="center" mt={4}>
            <Typography variant="h3" gutterBottom align="center" color="white">
              Create an Account!          </Typography>
            <Box width="100%" maxWidth={400} mt={2}>
              <form onSubmit={submitHandler}>
                <TextField
                  fullWidth
                  type="text"
                  label="Full Name"
                  name="name"
                  value={formData.name}
                  onChange={handleInputChange}
                  margin="normal"
                  InputLabelProps={{ style: { color: 'white' } }}
                  InputProps={{ style: { color: 'white' } }}
                />

                <TextField
                  fullWidth
                  type="email"
                  label="Enter your email"
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  margin="normal"
                  InputLabelProps={{ style: { color: 'white' } }}
                  InputProps={{ style: { color: 'white' } }}
                />

                <TextField
                  fullWidth
                  type="password"
                  label="Password"
                  name="password"
                  value={formData.password}
                  onChange={handleInputChange}
                  margin="normal"
                  InputLabelProps={{ style: { color: 'white' } }}
                  InputProps={{ style: { color: 'white' } }}
                />

                <TextField
                  select
                  label="Are you a:"
                  name="role"
                  value={formData.role}
                  onChange={handleInputChange}
                  // fullWidth
                  variant="outlined"
                  sx={{ mb: 2 }}
                >
                  <MenuItem value="patient">Patient</MenuItem>
                  <MenuItem value="doctor">Doctor</MenuItem>
                </TextField>

                <TextField
                  select
                  label="Gender:"
                  name="gender"
                  value={formData.gender}
                  onChange={handleInputChange}
                  // fullWidth
                  variant="outlined"
                >
                  <MenuItem value=""><Select></Select></MenuItem>
                  <MenuItem value="male">Male</MenuItem>
                  <MenuItem value="female">Female</MenuItem>
                  <MenuItem value="other">Other</MenuItem>
                </TextField>

                {/* <div className='d-flex mt-4 justify-content-center align-items-center'>
                  <figure className='border rounded-5' style={{ width: '15%' }}>
                    <img className='border rounded-5' src={avatar} alt='avatar' />
                  </figure>

                  <div style={{ marginLeft: '30px' }}>
                    <input className='border rounded' onChange={handleFileInputChange} type='file' name='photo' id='customFile' accept='.jpg, .png' />

                    <label htmlFor='customFile'>
                      Upload Photo
                    </label>
                  </div>
                </div> */}

                <Box display="flex" justifyContent="center" mt={2}>
                  <Button disabled={loading && true} variant="contained" color="primary" type="submit">
                   {loading?(<HashLoader size={35} color="#ffffff"/>):'Sign up'}
                    
                  </Button>
                </Box>

                <Box display="flex" mt={2} justifyContent="center">
                  <Typography variant="body1" align="center" color="white">
                    Already have an account? <Link to="/login" style={{ color: '#90caf9' }}>Login</Link>
                  </Typography>
                </Box>
              </form>
            </Box>

          </Box>
        </AnimatedCard>
      </Box>
    </Container>
  )
}

export default Signup
