import React, { useEffect, useState } from 'react'
import { TextField, Button, Grid, Typography, Box, InputLabel, FormControl, Select, MenuItem } from '@mui/material';
import { BASE_URL, token } from '../../src/config.js';
import { toast } from 'react-toastify';

const Profile = ({ doctorData }) => {

    const [formData, setFormData] = useState({
        name: '',
        email: '',password:'', phone: '',bio:'', gender: '', specialization: '', ticketPrice: null,
        qualifications: [{ startingDate: '', endingDate: '', degree: '', university: '' }],
        experiences: [{ startingDate: "", endingDate: "", position: "", hospital: "" }],
        timeSlots: [{ day: '', startingTime: '', endingTime: '' }],
        about: ''
    })


    useEffect(() => {
        setFormData({
            name: doctorData?.name,
            email: doctorData?.email,
            password: doctorData?.password,
            phone: doctorData?.phone,
            bio: doctorData?.bio,
            gender: doctorData?.gender,
            specialization: doctorData?.specialization,
            ticketPrice: doctorData?.ticketPrice,
            qualifications: doctorData?.qualifications,
            experiences: doctorData?.experiences,
            timeSlots: doctorData?.timeSlots,
            about: doctorData?.about

        })
    },[doctorData])



    const handleInputChange = e => {
        setFormData({ ...formData, [e.target.name]: e.target.value })
    }
    const updateProfileHandler = async e => {
        e.preventDefault()

        try {
            const res = await fetch(`${BASE_URL}/doctors/${doctorData._id}`,
                {
                    method: 'PUT',
                    headers: {
                        'content-type': 'application/json',
                        Authorization:`Bearer ${token}`
                    },
                    body: JSON.stringify(formData)
                }
            )
            const result = await res.json()
            if(!res.ok){
                throw Error(result.message)
            }
            toast.success(result.message)



        } catch (err) {
            toast.error(err.message)

        }
    }

    const addItem = (key, item) => {
        setFormData(prevFormData => {
            const currentItems = Array.isArray(prevFormData[key]) ? prevFormData[key] : [];
            return { ...prevFormData, [key]: [...currentItems, item] };
        });
    };
    
    //reusable input change func
    const handleReusableInputChangeFunc = (key, index, event) => {
        const { name, value } = event.target
        setFormData(prevFormData => {
            const updateItems = [...prevFormData[key]]
            updateItems[index][name] = value
            return {
                ...prevFormData, [key]: updateItems,
            }
        })
    }

    //qualification

    const addQualification = e => {
        e.preventDefault()
        addItem("qualifications", {
            startingDate: "",
            endingDate: "",
            degree: "",
            university: ""

        })
    }

    const handleQualificationChange = (event, index) => {
        handleReusableInputChangeFunc('qualifications', index, event)
    }

    const deleteItem = (key, index) => {
        setFormData(prevFormData => ({
            ...prevFormData, [key]: prevFormData[key].filter((_, i) => i !== index)
        }))
    }

    const deleteQualification = (e, index) => {
        e.preventDefault()
        deleteItem('qualifications', index)
    }


    //experience

    const addExperience = e => {
        e.preventDefault()
        addItem("experiences", {
            startingDate: "",
            endingDate: "",
            position: "",
            hospital: ""

        })
    }

    const handleExperienceChange = (event, index) => {
        handleReusableInputChangeFunc('experiences', index, event)
    }

    // const deleteItem = (key, index) => {
    //     setFormData(prevFormData => ({
    //         ...prevFormData,[key]:prevFormData[key].filter((_,i)=>i !== index)
    //     }))
    // }

    const deleteExperience = (e, index) => {
        e.preventDefault()
        deleteItem('experiences', index)
    }


    //timeslots

    const addTimeSlot = e => {
        e.preventDefault()
        addItem("timeSlots", {
            day: '', startingTime: '', endingTime: ''

        })
    }

    const handleTimeSlotChange = (event, index) => {
        handleReusableInputChangeFunc('timeSlots', index, event)
    }

    // const deleteItem = (key, index) => {
    //     setFormData(prevFormData => ({
    //         ...prevFormData,[key]:prevFormData[key].filter((_,i)=>i !== index)
    //     }))
    // }

    const deleteTimeSlot = (e, index) => {
        e.preventDefault()
        deleteItem('timeSlots', index)
    }






    return (
        <div>
            <h2>Profile Information</h2>

            <form>
                <Grid container spacing={2}>
                    <Grid item xs={12} sm={6}>
                        <TextField
                            label="Name"
                            name="name"
                            value={formData.name}
                            placeholder="Enter your name"
                            variant="filled"
                            fullWidth
                            onChange={handleInputChange}
                            className='form__input'
                        />
                    </Grid>
                    <Grid item xs={12} sm={6}>
                        <TextField
                            label="Email"
                            name="email"
                            value={formData.email}
                            placeholder="Enter your email"
                            variant="filled"
                            fullWidth
                            onChange={handleInputChange}
                            className='form__input'
                            InputProps={{
                                readOnly: true,
                            }}
                        />
                    </Grid>
                    <Grid item xs={12} sm={6}>
                        <TextField
                            label="Phone"
                            name="phone"
                            value={formData.phone}
                            placeholder="Enter your phone number"
                            variant="filled"
                            fullWidth
                            onChange={handleInputChange}
                            className='form__input'
                        />
                    </Grid>
                    <Grid item xs={12} sm={6}>
                        <TextField
                            label="Bio"
                            name="bio"
                            value={formData.bio}
                            placeholder="Enter your bio"
                            variant="filled"
                            fullWidth
                            inputProps={{ maxLength: 100 }}
                            onChange={handleInputChange}
                            className='form__input'
                        />
                    </Grid>
                </Grid>


                <div className='mt-3'>
                    <Box>
                        <Grid container spacing={2}>
                            <Grid item xs={12} md={4}>
                                <FormControl fullWidth>
                                    <InputLabel>Gender</InputLabel>
                                    <Select
                                        name="gender"
                                        value={formData.gender}
                                        onChange={handleInputChange}
                                        variant='filled'
                                        label="Gender"
                                    >
                                        <MenuItem value="">Select</MenuItem>
                                        <MenuItem value="male">Male</MenuItem>
                                        <MenuItem value="female">Female</MenuItem>
                                        <MenuItem value="other">Other</MenuItem>
                                    </Select>
                                </FormControl>
                            </Grid>
                            <Grid item xs={12} md={4}>
                                <FormControl fullWidth>
                                    <InputLabel>Specialization</InputLabel>
                                    <Select
                                        name="specialization"
                                        value={formData.specialization}
                                        onChange={handleInputChange}
                                        variant='filled'
                                        label="Specialization"
                                    >
                                        <MenuItem value="">Select</MenuItem>
                                        <MenuItem value="surgeon">Surgeon</MenuItem>
                                        <MenuItem value="ayurvedha">Ayurvedha</MenuItem>
                                        <MenuItem value="psychology">Psychology</MenuItem>
                                    </Select>
                                </FormControl>
                            </Grid>
                            <Grid item xs={12} md={4}>
                                <TextField
                                    label="Token Price"
                                    type="number"
                                    name="ticketPrice"
                                    variant='filled'
                                    value={formData.ticketPrice}
                                    onChange={handleInputChange}
                                    fullWidth
                                />
                            </Grid>
                        </Grid>
                    </Box>


                    <Box className='mt-3'>
                        <Typography variant="h6">Qualifications</Typography>
                        {formData.qualifications?.map((item, index) => (
                            <Box key={index} mb={2}>
                                <Grid container spacing={2}>
                                    <Grid item xs={12} sm={6}>
                                        <TextField
                                            fullWidth
                                            label="Starting Date"
                                            type="date"
                                            name="startingDate"
                                            variant="filled"
                                            value={item.startingDate}
                                            InputLabelProps={{ shrink: true }}
                                            onChange={e => handleQualificationChange(e, index)}
                                        />
                                    </Grid>
                                    <Grid item xs={12} sm={6}>
                                        <TextField
                                            fullWidth
                                            label="Ending Date"
                                            type="date"
                                            name="endingDate"
                                            variant="filled"
                                            value={item.endingDate}
                                            InputLabelProps={{ shrink: true }}
                                            onChange={e => handleQualificationChange(e, index)}

                                        />
                                    </Grid>
                                    <Grid item xs={12} sm={6}>
                                        <TextField
                                            fullWidth
                                            label="Degree"
                                            type="text"
                                            name="degree"
                                            variant="filled"
                                            value={item.degree}
                                            onChange={e => handleQualificationChange(e, index)}

                                        />
                                    </Grid>
                                    <Grid item xs={12} sm={6}>
                                        <TextField
                                            fullWidth
                                            label="University"
                                            type="text"
                                            name="university"
                                            variant="filled"
                                            value={item.university}
                                            onChange={e => handleQualificationChange(e, index)}

                                        />
                                    </Grid>
                                    <Grid item xs={12}>
                                        <Button
                                            fullWidth
                                            variant="contained"
                                            color="error"
                                            className="mt-3"
                                            onClick={e => deleteQualification(e, index)}
                                        >
                                            Delete
                                        </Button>
                                    </Grid>
                                </Grid>
                            </Box>
                        ))}
                        <Box display="flex" justifyContent="center">
                            <Button
                                onClick={addQualification}
                                variant="contained"
                                // color="dark"
                                className="w-50 mt-3 btn btn-dark"
                            >
                                Add Qualifications
                            </Button>
                        </Box>
                    </Box>

                    <Box>
                        <Typography variant="h6">Experiences</Typography>
                        {formData.experiences?.map((item, index) => (
                            <Box key={index} mb={2}>
                                <Box display="flex" justifyContent="space-between">
                                    <Box flex={1} mr={1}>
                                        <Typography>Starting Date</Typography>
                                        <TextField
                                            type="date"
                                            name="startingDate"
                                            variant="filled"
                                            value={item.startingDate}
                                            onChange={(e) => handleExperienceChange(e, index)}
                                            fullWidth
                                        />
                                    </Box>
                                    <Box flex={1} ml={1}>
                                        <Typography>Ending Date</Typography>
                                        <TextField
                                            type="date"
                                            name="endingDate"
                                            variant="filled"
                                            value={item.endingDate}
                                            onChange={(e) => handleExperienceChange(e, index)}
                                            fullWidth
                                        />
                                    </Box>
                                </Box>
                                <Box display="flex" justifyContent="space-between" mt={2}>
                                    <Box flex={1} mr={1}>
                                        <Typography>Position</Typography>
                                        <TextField
                                            type="text"
                                            name="position"
                                            variant="filled"
                                            value={item.position}
                                            onChange={(e) => handleExperienceChange(e, index)}
                                            fullWidth
                                        />
                                    </Box>
                                    <Box flex={1} ml={1}>
                                        <Typography>Hospital</Typography>
                                        <TextField
                                            type="text"
                                            name="hospital"
                                            value={item.hospital}
                                            variant="filled"
                                            onChange={(e) => handleExperienceChange(e, index)}
                                            fullWidth
                                        />
                                    </Box>
                                </Box>
                                <Box display="flex" justifyContent="flex-end" mt={2}>
                                    <Button variant="contained" color="error"
                                        onClick={e => deleteExperience(e, index)}
                                    >
                                        Delete
                                    </Button>
                                </Box>
                            </Box>
                        ))}

                        <Box display="flex" justifyContent="center">
                            <Button
                                onClick={addExperience}
                                variant="contained"
                                // color="dark"
                                className="w-50 mt-3 btn btn-dark"
                            >
                                Add Experince
                            </Button>
                        </Box>


                        <Box display="flex" justifyContent="center">


                        </Box>
                    </Box>
                </div>


                {/* <div className='mt-4'>
                    <Grid container spacing={2}>
                        <Grid item xs={12} sm={6}>
                            <TextField
                                label="Name"
                                name="name"
                                value={formData.name}
                                placeholder="Enter your name"
                                variant="filled"
                                fullWidth
                                onChange={handleInputChange}
                                className='form__input'
                            />
                        </Grid>
                        <Grid item xs={12} sm={6}>
                            <TextField
                                label="Email"
                                name="email"
                                value={formData.email}
                                placeholder="Enter your email"
                                variant="filled"
                                fullWidth
                                onChange={handleInputChange}
                                className='form__input'
                                InputProps={{
                                    readOnly: true,
                                }}
                            />
                        </Grid>
                        <Grid item xs={12} sm={6}>
                            <TextField
                                label="Phone"
                                name="phone"
                                value={formData.phone}
                                placeholder="Enter your phone number"
                                variant="filled"
                                fullWidth
                                onChange={handleInputChange}
                                className='form__input'
                            />
                        </Grid>
                        <Grid item xs={12} sm={6}>
                            <TextField
                                label="Bio"
                                name="bio"
                                value={formData.bio}
                                placeholder="Enter your bio"
                                variant="filled"
                                fullWidth
                                inputProps={{ maxLength: 100 }}
                                onChange={handleInputChange}
                                className='form__input'
                            />
                        </Grid>
                    </Grid>

                </div> */}


                <div>
                    <Typography>Time Slots</Typography>
                    {formData.timeSlots?.map((item, index) => (
                        <Grid container spacing={2} key={index} alignItems="center">
                            <Grid item xs={3}>
                                <InputLabel>Day</InputLabel>
                                <FormControl fullWidth>
                                    <Select name="day"
                                        onChange={(e) => handleTimeSlotChange(e, index)}
                                        value={item.day} className="form__input">
                                        <MenuItem value="">Select</MenuItem>
                                        <MenuItem value="saturday">Saturday</MenuItem>
                                        <MenuItem value="sunday">Sunday</MenuItem>
                                        <MenuItem value="monday">Monday</MenuItem>
                                        <MenuItem value="tuesday">Tuesday</MenuItem>
                                        <MenuItem value="wednesday">Wednesday</MenuItem>
                                        <MenuItem value="thursday">Thursday</MenuItem>
                                        <MenuItem value="friday">Friday</MenuItem>
                                    </Select>
                                </FormControl>
                            </Grid>

                            <Grid item xs={3}>
                                <InputLabel>Starting Time</InputLabel>
                                <TextField
                                    type="time"
                                    name="startingTime"
                                    onChange={(e) => handleTimeSlotChange(e, index)}

                                    value={item.startingTime}
                                    className="form__input"
                                    fullWidth
                                />
                            </Grid>

                            <Grid item xs={3}>
                                <InputLabel>Ending Time</InputLabel>
                                <TextField
                                    type="time"
                                    name="endingTime"
                                    onChange={(e) => handleTimeSlotChange(e, index)}

                                    value={item.endingTime}
                                    className="form__input"
                                    fullWidth
                                />
                            </Grid>

                            <Grid item xs={2}>
                                <Button onClick={e => deleteTimeSlot(e, index)} variant="contained" color="error">
                                    Delete
                                </Button>
                            </Grid>
                        </Grid>
                    ))}




                    <Box display="flex" justifyContent="center">
                        <Button
                            variant="contained"
                            // color="dark"
                            className="w-50 mt-3 btn btn-dark"
                            onClick={addTimeSlot}
                        >
                            Add TimeSlots
                        </Button>
                    </Box>
                </div>


                <div>
                    <Typography variant="body1">About</Typography>
                    <TextField
                        name="about"
                        multiline
                        rows={5}
                        value={formData.about}
                        onChange={handleInputChange}
                        placeholder="Write about you"
                        variant="filled"
                        fullWidth
                    />
                </div>


                <div className='py-3'>
                    <button type='submit' onClick={updateProfileHandler} className='btn btn-success w-25'>Update Profile</button>
                </div>
            </form>
        </div>
    )
}

export default Profile
