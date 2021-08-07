import { Button } from 'react-bootstrap';
import { Card } from 'react-bootstrap';

const Cards=(props)=>{
    return <div className="card">
        <Card style={{ width: '18rem' }}>
        <Card.Img variant="top" style={{height:'200px',backgroundImage:props.imgPath,backgroundPosition:'center',backgroundSize:'cover'}} />
        <Card.Body>
            <Card.Title>{props.title}</Card.Title>
            <Card.Text>
            Some quick example text to build on the card title and make up the bulk of
            the card's content.
            </Card.Text>
            <Button variant="outline-dark" size="lg">Buy</Button>
        </Card.Body>
        </Card>
        </div>
}

export default Cards;