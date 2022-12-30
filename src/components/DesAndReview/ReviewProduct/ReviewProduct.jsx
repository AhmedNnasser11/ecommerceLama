import { Button, Checkbox, FormControlLabel, Rating } from "@mui/material";
import React from "react";
import { ReviewProductContainer } from "./ReviewProductStyle";

const ReviewProduct = ({ title }) => {
  return (
    <ReviewProductContainer>
<<<<<<< HEAD
      <h4>Review {title}</h4> 
      <form> 
=======
      <h4>Review {title}</h4>
      <form>
>>>>>>> parent of db5a103 (test 2)
        <div className="rating">
          <label>Your Rating: </label>
          <Rating name="half-rating" defaultValue={0} precision={0.5} />
        </div>
        <div className="comment">
        <label>Your review: </label>
            <textarea>

            </textarea>
        </div>
        <div className="username">
            <div className="text">
                <label>name: </label>
                <input type="text" />
            </div>
            <div className="text">
                <label>E-mail: </label>
                <input type="email" />
            </div>
        </div>
        <div className="submit">
        <FormControlLabel control={<Checkbox />} label=" Save my name, email, and website in this browser for the next time I comment." style={{marginBottom: '30px', fontWeight: '400',fontSize: '1rem'}}/>
        <Button className='button__submit' variant="contained" size="small">Submit</Button>
        </div>
       
      </form>
    </ReviewProductContainer>
  );
};

export default ReviewProduct;
