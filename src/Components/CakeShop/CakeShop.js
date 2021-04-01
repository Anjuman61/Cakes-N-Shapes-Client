import React from 'react';
import { Button, Card } from 'react-bootstrap';
import { useHistory } from 'react-router';
import './CakeShop.css'

const CakeShop = (props) => {
    const { name, weight, price, imageURL, _id } = props.cake;
    const history = useHistory();
    const handleBuyProduct = (id) => {
        history.push(`cakeShop/${id}`)
    }
    return (
        <Card style={{ width: '18rem' }}>
            <Card.Img variant="top" className='card-image img-fluid' src={imageURL} />
            <Card.Body>
                <Card.Title>{name}-{weight}</Card.Title>
                <div style={{ display: 'flex', color: 'green' }}>
                    <h6>Price: {price} Taka</h6>
                    <Button onClick={() => { handleBuyProduct(_id) }} style={{ marginLeft: '20px' }} variant="success">Buy Now</Button>
                </div>
            </Card.Body>
        </Card>

    );
};

export default CakeShop;