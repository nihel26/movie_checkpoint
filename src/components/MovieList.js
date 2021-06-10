import React from 'react'
import MovieCard from './MovieCard'
import "../App.css"

 const MovieList = ({movieData,rate,search}) => {
     const filter=()=>{
         if (rate>0 && search.trim()){
            return(movieData.filter((movie)=>movie.title.toLowerCase().includes(search.toLowerCase())
            && movie.rating===rate))}
            if (rate>0){
                return(movieData.filter((movie)=>movie.rating===rate))
            }
            if (search.trim()){
                return(movieData.filter((movie)=>movie.title.toLowerCase().includes(search.toLowerCase())))
            }
            return(movieData)
     }
    return (
        <div className="container">
         {(filter()).map((movie,i)=>{
             return(
                 <div key={i}>
                     <MovieCard movie={movie}/>
                 </div>
             )
         })}
        </div>
    )
}


export default MovieList;