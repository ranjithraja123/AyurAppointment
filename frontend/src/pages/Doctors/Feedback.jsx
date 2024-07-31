import React, { useState } from 'react'
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import { formatDate } from '../../utils/formatDate';
import { HiStar } from "react-icons/hi";
import FeedBackForm from './FeedBackForm';


const Feedback = () => {
    const [showFeedbackForm, setShowFeedbackForm] = useState(false)
    return (
        <>
        <div className='row'>
            <div className='col-1'>
                <AccountCircleIcon fontSize='large' />

            </div>
            <div className='col-8'>
                <span>Ranjith Kumar Raja</span>
                <p>{formatDate('12-03-2024')}</p>
                <p>Highly Recomended</p>

            </div>
            <div className='col-3'>
                <div className='d-flex'>
                    {[...Array(5).keys()].map((_, index) =>

                        <HiStar fontSize={30} key={index} color='orange' />
                    )}
                </div>


            </div>
        </div>
        <div className='row'>
            <div className='col-1'>
                <AccountCircleIcon fontSize='large' />

            </div>
            <div className='col-8'>
                <span>Ranjith Kumar Raja</span>
                <p>{formatDate('12-03-2024')}</p>
                <p>Providing good service</p>

            </div>
            <div className='col-3'>
                <div className='d-flex'>
                    {[...Array(5).keys()].map((_, index) =>

                        <HiStar fontSize={30} key={index} color='orange' />
                    )}
                </div>


            </div>
        </div>
        {!showFeedbackForm &&  <div className='d-flex justify mt-2' >
            <button className='m-auto btn btn-success w-50' onClick={()=>setShowFeedbackForm(true)}>Give Feedback</button>
        </div>}
        {showFeedbackForm && <FeedBackForm />}
       

        </>
    )
}

export default Feedback
