import React from 'react';

import {Link } from 'react-router-dom';
import {Button} from 'react-bootstrap';
import ReactPlayer from 'react-player'
function Description(props) {
    return (
        <div className='trailer'>
            <Link to="/"><Button>Home Page</Button></Link>
            <h1>{props.location.Props.title}</h1>
            <ReactPlayer url={props.location.Props.linkt} width="700px" height="500px" playing="true"
	        />
        </div>
    )
}

export default Description
