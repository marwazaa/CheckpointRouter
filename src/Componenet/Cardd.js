import React from 'react';
import {Card,Button} from 'react-bootstrap';
import StarRatingComponent from 'react-star-rating-component';
import {Link } from 'react-router-dom';



function Cardd({elcard}) {
    return (
     
         <Card style={{ width: '18rem',marginTop:'20px'}}>
  <Card.Img className="Imgfilm" variant="top" src={elcard.imgsrc} />
  <Card.Body >
    <Card.Title>{elcard.title}</Card.Title>
    <Card.Text>{elcard.year} </Card.Text>
    <StarRatingComponent 
          starCount={7}
          value={elcard.rating}
        />
        <Card.Text>
    <Link to={{pathname:'Description',Props:{linkt:elcard.linkt,title:elcard.title}}}
    ><Button>Show more</Button></Link></Card.Text>
  </Card.Body>
</Card>
        
    )
}

export default Cardd
