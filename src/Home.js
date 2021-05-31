import 'bootstrap/dist/css/bootstrap.min.css';
import React, {useState} from "react";
import MovieList from './Componenet/MovieList';
import './App.css';
import AddMovie from './Componenet/AddMovie';
import { Container } from 'react-bootstrap';
import SerachTitile from './Componenet/SerachTitile';
import SearchRating from './Componenet/SearchRating';


function Home() {
  let [tabmouvies, setTabmouvies] = useState([
  {title:"croods 2",
  imgsrc:"https://image.tmdb.org/t/p/w185/nMLI9xkJTbgpZjMSrFiTUDv9WIG.jpg",
  rating:2,
  linkt:"https://youtu.be/ZB6uNWtjtoM"},
  
  {title:"miraculous World Shanghai",
  imgsrc:"https://image.tmdb.org/t/p/w185/tf9nWFyJ745mBFkXZtPWabDYBR3.jpg",
  rating:4,
  linkt:"https://www.youtube.com/watch?v=0baDUWXxqvY"},

  {title:"tom & Jerry",
  imgsrc:"https://image.tmdb.org/t/p/w185/i8HKtV9YSmvME1UguSZGRoJqU3F.jpg",
  rating:3,
  linkt:"https://www.youtube.com/watch?v=WGtBtV7GkUA"},
 
   ]);
   
   
  let addMovie=(newmovie)=>{
    setTabmouvies([...tabmouvies,newmovie]);
  }

  let search=(titleSearch)=>{
  setTabmouvies(tabmouvies.filter(el=>el.title.toLowerCase().includes(titleSearch)))
  }

  let searchByrating=(newRating)=>{
  setTabmouvies(tabmouvies.filter(el=>el.rating>=newRating))
  }

  return (
  <div>
    <Container>
      <SerachTitile search={search}/>
      <SearchRating searchByrating={searchByrating} />
      <MovieList tabmouvies={tabmouvies}/>
      <AddMovie addMovie={addMovie}/>
    </Container>
  </div>
  
  )
}
export default Home






