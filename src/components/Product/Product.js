import React from 'react';
import { Card, ListGroupItem, ListGroup } from 'react-bootstrap';
import "./Product.css"

const Product = (props) => {
    const { name, price, seller, ratings, img } = props.product;
    console.log(props);
    return (
        <div className='col-lg-4 col-md-6 col-sm-12'>
            <Card className='card' >
                <Card.Img variant="top" src={img} />
                <Card.Body>
                    <Card.Title>{name.slice(0, 10)}</Card.Title>
                </Card.Body>
                <ListGroup className="list-group-flush">
                    <ListGroupItem>Price: ${price}</ListGroupItem>
                    <ListGroupItem>Manufacture: {seller}</ListGroupItem>
                    <ListGroupItem>Ratings: {ratings} star</ListGroupItem>
                </ListGroup>
                <Card.Body>
                    <button className='w-100 border-0 bg-success p-3 rounded-3 text-white fw-bold'>
                        Add to cart
                    </button>
                </Card.Body>
            </Card>
        </div>
    );
};

export default Product;