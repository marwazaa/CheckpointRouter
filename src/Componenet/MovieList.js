import React from 'react';
import Cardd from './Cardd';




function MovieList({tabmouvies}) {
    return (
        <div className='movielist'>
         {tabmouvies.map (elcard=><Cardd elcard={elcard}/>)}
        </div>
        
    )
}

export default MovieList
