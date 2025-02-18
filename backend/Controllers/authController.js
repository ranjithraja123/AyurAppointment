
import User from '../models/UserSchema.js'
import Doctor from '../models/DoctorSchema.js'
import jwt from 'jsonwebtoken'
import bcrypt from 'bcryptjs'


const generateToken = user => {
    return jwt.sign({id:user._id, role:user.role}, process.env.JWT_SECRET_key, {
        expiresIn: '15d'
    })

}


export const register = async (req,res) => {
    const {email, password, name, role, gender} = req.body
    try {
        let user = null
        if(role === 'patient') {
            user = await User.findOne({email})
        }
        else if(role === 'doctor'){
            user = await Doctor.findOne({email})
        }

        if(user){
            return res.status(400).json({message:'User Already exist'})
        }


        //hash password
        const salt = await bcrypt.genSalt(10)
        const hashPassword = await bcrypt.hash(password, salt)

        console.log(hashPassword,'has')

        if(role === 'patient'){
            user = new User({
                name,
                email,
                password: hashPassword,
                gender,
                role
            })
        }
        if(role === 'doctor') {
            user = new Doctor({
                name,
                email,
                password: hashPassword,
                gender,
                role
            })
        }

        await user.save()
        res.status(200).json({
            success:true, message:'User successfully created'
        })

    } catch (err) {
        res.status(500).json({success:false, message:'Internal Server Error',err})

    }
}


export const login = async (req,res) => {
    const {email, password} = req.body
    try {

        let user = null

        const patient = await User.findOne({email})
        const doctor = await Doctor.findOne({email})


        if(patient){
            user = patient
        }
        if(doctor){
            user = doctor
        }


        //check user exis or not
        if(!user){
            return res.status(404).json({success:false, message:'User not found'})
        }

        //compare password
        const isPasswordMatch = await bcrypt.compare(req.body.password,user.password)


        if(!isPasswordMatch){
            return res.status(400).json({status:false, message: 'Invalid Credentials'})
        }

        const token = generateToken(user)

        console.log(user._doc, "userrrr")
        const {password, role, appointments, ...rest} = user._doc

        res.status(200).json({
            status: true, message:'Successfully Login', token, data:{... rest},role
        })


    } catch (err) {
        res.status(500).json({status:false, message:'Failed to login'})

    }
}