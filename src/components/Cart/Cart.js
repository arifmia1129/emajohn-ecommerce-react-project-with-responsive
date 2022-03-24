import React from 'react';
import { Card, ListGroup, ListGroupItem } from 'react-bootstrap';
import "./Cart.css"
const Cart = () => {
    return (
        <div>
            <Card className='bg-success text-white border-3 rounded-3 cart' style={{}}>

                <Card.Body>
                    <Card.Title className='text-center'>Order Summary</Card.Title>

                </Card.Body>
                <ListGroup className="list-group-flush">
                    <ListGroupItem>Selected Items:{ }</ListGroupItem>
                    <ListGroupItem>Total Price: ${ }</ListGroupItem>
                    <ListGroupItem>Total Shipping Charge: ${ }</ListGroupItem>
                    <ListGroupItem>Tax: ${ }</ListGroupItem>
                    <ListGroupItem><h4>Grand Total: ${ }</h4></ListGroupItem>
                </ListGroup>
                <Card.Body>
                    <button className='btn btn-outline border-white border-3 fw-bold text-white w-100 p-2'>Clear Cart</button>
                </Card.Body>
                <Card.Body>
                    <button className='btn btn-outline border-white border-3 fw-bold text-white w-100 p-2'>Review Order</button>
                </Card.Body>
            </Card>
        </div>
    );
};

export default Cart;