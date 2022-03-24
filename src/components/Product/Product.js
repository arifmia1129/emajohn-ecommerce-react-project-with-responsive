import React from 'react';
import { Card, ListGroupItem, ListGroup } from 'react-bootstrap';
import "./Product.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCartPlus, faStar } from '@fortawesome/free-solid-svg-icons';
const Product = ({ addToCart, product }) => {
    const { name, price, seller, ratings, img } = product;
    const star = <FontAwesomeIcon className='px-2' icon={faStar}></FontAwesomeIcon>
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
                    <ListGroupItem>Ratings: {ratings} {star} </ListGroupItem>
                </ListGroup>
                <Card.Body>
                    <button onClick={() => addToCart(product)} className='w-100 border-0 bg-success p-3 rounded-3 text-white fw-bold'>
                        Add to cart
                        <FontAwesomeIcon className='px-2' icon={faCartPlus}></FontAwesomeIcon>
                    </button>
                </Card.Body>
            </Card>
        </div>
    );
};

export default Product;