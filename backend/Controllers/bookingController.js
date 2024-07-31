import User from '../models/UserSchema.js'
import Doctor from '../models/DoctorSchema.js'
import Booking from '../models/BookingSchema.js'



 export const getCheckout = async(req,res) => {
    const { doctorId, userId, ticketPrice, appointmentDate } = req.body;

    
    try {
      // Create a new booking
      const newBooking = new Booking({
        doctor: doctorId,
        user: userId,
        ticketPrice,
        appointmentDate,
      });
  
      // Save the booking
      const savedBooking = await newBooking.save();
  
      // Update the user and doctor with the new booking
      await User.findByIdAndUpdate(userId, { $push: { appointments: savedBooking._id } });
      await Doctor.findByIdAndUpdate(doctorId, { $push: { appointments: savedBooking._id } });
  
      res.status(201).json({
        message: 'Booking successful',
        booking: savedBooking,
      });
    } catch (error) {
      console.error(error);
      res.status(500).json({
        message: 'Failed to book appointment',
        error,
      });
    }
 }

 export const getUserAppointments = async(req,res) => {
    const { userId } = req.params;
  
    try {
      const bookings = await Booking.find({ user: userId })
        .populate('doctor', 'name email specialization') // populate doctor details
        .populate('user', 'name email'); // populate user details
  
      if (!bookings.length) {
        return res.status(404).json({ message: 'No bookings found for this user' });
      }
  
      res.json(bookings);
    } catch (error) {
      console.error(error);
      res.status(500).json({
        message: 'Failed to fetch bookings',
        error,
      });
    }
 }

 export const getDoctorAppointments = async(req,res) => {
    const { doctorId } = req.params;
  
    try {
      const bookings = await Booking.find({ doctor: doctorId })
        .populate('doctor', 'name email specialization') // populate doctor details
        .populate('user', 'name email'); // populate user details
  
      if (!bookings.length) {
        return res.status(404).json({ message: 'No bookings found for this doctor' });
      }
  
      res.json(bookings);
    } catch (error) {
      console.error(error);
      res.status(500).json({
        message: 'Failed to fetch bookings',
        error,
      });
    }
 }







