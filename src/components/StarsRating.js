import React from "react";
import StarRatings from '../../node_modules/react-star-ratings'
const StarsRating = ({rate,setRate}) => {
  
  const changeRating = (newRate) => {
    setRate(newRate);
  };
  return (
    <div>
      <StarRatings
        rating={rate}
        starRatedColor="yellow"
        changeRating={changeRating}
        numberOfStars={5}
        name="rating"
      />
      <button onClick={()=>setRate(0)} style={{backgroundColor:"white", color:"darkred", border:"1px white solid", borderRadius:"10px"}}>
        Reset
        </button>
    </div>
  );
};

export default StarsRating;
