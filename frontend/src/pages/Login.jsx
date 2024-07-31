import React, { useContext, useState } from 'react';
import { Box, Button, Card, Container, TextField, Typography } from '@mui/material';
import { Link, useNavigate } from 'react-router-dom';
import { styled, keyframes } from '@mui/system';
import { BASE_URL } from '../config';
import { toast } from 'react-toastify';
import {authContext} from '../context/AuthContext.jsx'
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

const Login = () => {
  const [formData, setFormData] = useState({ email: '', password: '' });

  const [loading,setLoading] = useState(false)
  const navigate = useNavigate()
  const {dispatch} = useContext(authContext)


  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({ ...prevData, [name]: value }));
  };


  
  const submitHandler = async event => {
    
    event.preventDefault()
    setLoading(true)

    try {
      const res = await fetch(`${BASE_URL}/auth/login`,{
        method: 'post',
        headers:{
          'Content-Type':'application/json'
        },
        body: JSON.stringify(formData)
      })
      const result = await res.json()

      if(!res.ok){
        throw new Error(result.message)
      }

      dispatch({
        type:'LOGIN_SUCCESS',
        payload:{
          user:result.data,
          token:result.token,
          role:result.role
        },
      });

      console.log(result,'login data')


      setLoading(false)
      toast.success(result.message)
      navigate('/home')
    } catch (err) {
      toast.error(err.message)
      setLoading(false)
    }
  }


  return (
    <Container className="py-1">
      <Box display="flex" justifyContent="center" alignItems="center" minHeight="100vh">
        <AnimatedCard>
          <Box display="flex" flexDirection="column" alignItems="center" mt={4}>
            <Typography variant="h3" gutterBottom align="center" color="white">
              Hello!
            </Typography>
            <Box width="100%" maxWidth={400} mt={2}>
              <form onSubmit={submitHandler}>
                <TextField
                  fullWidth
                  type="email"
                  label="Enter your Email"
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
                  label="Enter your Password"
                  name="password"
                  value={formData.password}
                  onChange={handleInputChange}
                  margin="normal"
                  InputLabelProps={{ style: { color: 'white' } }}
                  InputProps={{ style: { color: 'white' } }}
                />
                <Box display="flex" justifyContent="center" mt={2}>
                  <Button variant="contained" color="primary" type="submit">
                  {loading?(<HashLoader size={35} color="#ffffff"/>):'Sign up'}
                  </Button>
                </Box>
              </form>
            </Box>
            <Box display="flex" mt={2} justifyContent="center">
              <Typography variant="body1" align="center" color="white">
                Don't have an account? <Link to="/register" style={{ color: '#90caf9' }}>Register</Link>
              </Typography>
            </Box>
          </Box>
        </AnimatedCard>
      </Box>
    </Container>
  );
};

export default Login;
