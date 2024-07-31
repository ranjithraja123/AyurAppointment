import React, { useState } from 'react'
import { HiStar } from 'react-icons/hi';
import { Typography, TextField, Button } from '@mui/material';

const FeedBackForm = () => {
    const [rating, setRating] = useState(0);
    const [hover, setHover] = useState(0)
  
    const [review, setReviewText] = useState('')
  


    const handleSubmitReview = async (e) => {
        e.preventDefault()
    }
    return (
   <form>
    {/* <h3>
        How would you Rate the overall Experience?

    </h3> */}
    {/* <div className='d-flex'>
        {[...Array(5)].map((_,index)=>{
            index += 1;

            return (
                <button key={index}  className={`${index <= (rating && hover)||hover ? "text-yellow-50":"text-gray-400"} bg-transparent border-0`}
                onClick={() => setRating(index)}
                onMouseEnter={() => setHover(index)}
                onMouseLeave={() => setHover(rating)}
                onDoubleClick={()=>{
                    setHover(0);
                    setRating(0)
                }}>
                    <span><HiStar fontSize={50} /></span>
                </button>
            )
        })}
    </div> */}
    <div>
        <h3>
            Share Your Feedback or Suggestions
        </h3>
        <TextField
                variant="outlined"
                multiline
                rows={5}
                placeholder="Write a message"
                fullWidth
                onChange={(e) => setReviewText(e.target.value)}
            />    </div>
    <button type='submit'onClick={handleSubmitReview} className='btn btn-success rounded w-25 mt-2'>Submit Feedback</button>
   </form>
  )
}

export default FeedBackForm
