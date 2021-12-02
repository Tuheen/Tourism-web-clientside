import React from 'react';
import TextField from '@mui/material/TextField';
import { Button, Container, Typography } from '@mui/material';
import { useState } from 'react';

const PostReview = () => {
    const [reviewDetail, setReviewDetail] = useState({});
    const handleOnBlur = e => {
        const field = e.target.name;
        const value = e.target.value;
        reviewDetail[field] = value;
        setReviewDetail(reviewDetail);
    }

    const handlePurchaseSubmit = e => {
        const addingReview = {
            ...reviewDetail
        }
        fetch('http://localhost:5000/reviews', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(addingReview)
        })
        .then(res => res.json())
        .then(data => {
            console.log(data)
            alert('review added successfully');
        })

        e.preventDefault();
    }

    return (
        <div>
            <Typography sx ={{my: 5}}variant="h1" color="text.secondary">
                Post Your Review 
            </Typography>
            <Container>
                <form onSubmit={handlePurchaseSubmit}>
                    <TextField
                        sx={{ width: '90%', m: 1}}
                        id="outlined-size-small"
                        name="Reviewer"
                        onBlur={handleOnBlur}
                        defaultValue="Your Name Here"
                        size="small"
                    />
                    <TextField

                        sx={{ width: '90%', m: 1}}
                        id="outlined-size-small"
                        name="review"
                        onBlur={handleOnBlur}
                        defaultValue="Write Your Thoughts Here"
                        size="small"
                    />
                    
                    <Button type= "submit" variant="contained">Add the Product</Button>
                </form>
            </Container>
        </div>
    );
};

export default PostReview;