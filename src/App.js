import React,{ useState } from 'react';
import './App.css';
import MovieList from './components/MovieList'
import Movies from './components/Movies'
import Navbar from './components/NavBar'
import Modal from './components/Model'
import StarsRating from './components/StarsRating'
import Search from './components/Search'
function App() {
  const [search, setSearch] = useState("")
  const [rate, setRate] = useState(0);
  const[movieData, setMovies] = useState(Movies)
  return (
    <div className="App">
    <Navbar/>
    <Search search={search} setSearch={setSearch}/>
    <StarsRating rate={rate} setRate={setRate}/>
    <Modal movieData={movieData} setMovies={setMovies}/>
    <MovieList rate={rate} search={search} movieData={movieData} setMovies={setMovies}/>
    </div>
  );
}

export default App;
