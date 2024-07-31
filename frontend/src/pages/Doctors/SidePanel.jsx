import React, { useState, useEffect } from 'react';
import { Card, CardContent, Typography, Button, Dialog, DialogActions, DialogContent, DialogTitle, TextField } from '@mui/material';
import { BASE_URL, token } from '../../config.js';
import { useParams } from 'react-router-dom';
import { toast } from 'react-toastify';
import useGetProfile from '../../hooks/useFetchData.jsx'

const SidePanel = ({ doctor }) => {
    const { id } = useParams();
    const [open, setOpen] = useState(false);
    const [appointmentDate, setAppointmentDate] = useState(null);

    const [appointData, setAppointData] = useState({
        doctorId: '',
        userId: '',
        appointmentDate: ''
    });

    const { data: userData, loading, error } = useGetProfile(`${BASE_URL}/users/profile/me`);

    useEffect(() => {
        console.log(id, 'propro');
    }, [doctor]);

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setAppointData((prevData) => ({ ...prevData, [name]: value }));
    };

    const bookingHandler = async () => {
        try {
            const res = await fetch(`${BASE_URL}/bookings/book`, {
                method: 'post',
                headers: {
                    'Content-Type':'application/json',
                    Authorization: `Bearer ${token}`
                },
                body:JSON.stringify(appointData)
            });

            const data = await res.json();
            console.log(data,"opopop");
            toast.success(result.message)


            if (!res.ok) {
                throw new Error(data.message + ' Please try again');
            }

        } catch (err) {
            toast.error(err.message);
        }
    };

    const handleOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };

    const handleSubmit = () => {
        setAppointData((prevData) => ({
            ...prevData,
            doctorId: doctor._id,
            userId: userData._id
        }));
        console.log(appointData,'appodata')
        bookingHandler();
        handleClose();
    };

    return (
        <>
            <Card sx={{ boxShadow: 3, p: 2, backgroundColor: 'rgba(0, 0, 0, 0.5)' }}>
                <CardContent>
                    <Typography variant="h5" component="div" align="center" color="whitesmoke" fontWeight="bold">
                        Time Slots
                    </Typography>
                    <hr />
                    <Typography variant="h6">
                        {doctor?.timeSlots?.map((item, index) => (
                            <div key={index} className='d-flex justify-content-between text-light'>
                                <p className='mb-0'>{item.day}</p>
                                <p className='mb-0'>{item.startingTime} to {item.endingTime}</p>
                            </div>
                        ))}
                    </Typography>
                </CardContent>
                <Button variant="contained" onClick={handleOpen} color="success" sx={{ mt: 2 }}>
                    Book Appointment
                </Button>
            </Card>

            <Dialog open={open} onClose={handleClose}>
                <DialogTitle>Book Appointment</DialogTitle>
                <DialogContent>
                    <TextField
                        margin="dense"
                        label="Doctor ID"
                        name="doctorId"
                        type="text"
                        fullWidth
                        value={doctor._id}
                        disabled
                    />
                    <TextField
                        margin="dense"
                        label="Patient ID"
                        name="userId"
                        type="text"
                        fullWidth
                        disabled
                        value={userData?._id}
                    />
                    <TextField
                        margin="dense"
                        label="Appointment Date"
                        name="appointmentDate"
                        type="date"
                        fullWidth
                        value={appointData.appointmentDate}
                        onChange={handleInputChange}
                        InputLabelProps={{
                            shrink: true,
                        }}
                    />
                </DialogContent>
                <DialogActions>
                    <Button onClick={handleClose} color="primary">
                        Cancel
                    </Button>
                    <Button onClick={handleSubmit} color="primary">
                        Submit
                    </Button>
                </DialogActions>
            </Dialog>
        </>
    );
};

export default SidePanel;
