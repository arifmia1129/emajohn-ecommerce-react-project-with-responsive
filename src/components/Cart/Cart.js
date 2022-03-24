import React from 'react';
import { Card, ListGroup, ListGroupItem } from 'react-bootstrap';
import "./Cart.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrashCan, faArrowRight } from '@fortawesome/free-solid-svg-icons';
const Cart = (props) => {
    let quantity = 0;
    let totalPrice = 0;
    let totalShipping = 0;
    for (const product of props.cart) {
        quantity = quantity + product.quantity;
        totalPrice = totalPrice + (product.price * product.quantity);
        totalShipping = totalShipping + product.shipping;
    }
    const tax = (totalPrice * 10) / 100;
    const grandTotal = totalPrice + totalShipping + tax;
    return (
        <div>
            <Card className='bg-success text-white border-3 rounded-3 cart' style={{}}>

                <Card.Body>
                    <Card.Title className='text-center'>Order Summary</Card.Title>
                </Card.Body>
                <ListGroup className="list-group-flush">
                    <ListGroupItem>Selected Items: {quantity}</ListGroupItem>
                    <ListGroupItem>Total Price: ${totalPrice}</ListGroupItem>
                    <ListGroupItem>Total Shipping Charge: ${totalShipping}</ListGroupItem>
                    <ListGroupItem>Tax: ${tax}</ListGroupItem>
                    <ListGroupItem><h4>Grand Total: ${grandTotal}</h4></ListGroupItem>
                </ListGroup>
                <Card.Body>
                    <button onClick={props.clearCart} className='btn btn-outline border-white border-3 fw-bold text-white w-100 p-2'>
                        Clear Cart
                        <FontAwesomeIcon className='px-2' icon={faTrashCan}></FontAwesomeIcon>
                    </button>
                </Card.Body>
                <Card.Body>
                    <button className='btn btn-outline border-white border-3 fw-bold text-white w-100 p-2'>Review Order
                        <FontAwesomeIcon className='px-2' icon={faArrowRight}></FontAwesomeIcon></button>
                </Card.Body>
            </Card>
        </div>
    );
};

export default Cart;