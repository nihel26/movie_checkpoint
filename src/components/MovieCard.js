import React from "react";
import { Card } from "react-bootstrap";
import RatingStar from "./RatingStar"

 const MovieCard = ({movie}) => {
    const{image,title, description, posterUrl, rating}=movie 
    //const {setMovies, movies}=props
  return (
    <div>
      <Card style={{ width: "18rem", height: "22rem", margin:"20px", border:"solid 2px darkred"}}>
        <Card.Img variant="top" style={{height:"60%"}} src={image}/>
        <Card.Body>
          <Card.Title>{title}</Card.Title>
          <p>{rating}</p>
         <RatingStar/>
        </Card.Body>
      </Card>
    </div>
  );
}

export default MovieCard;