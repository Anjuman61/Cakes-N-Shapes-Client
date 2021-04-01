import React, { useContext, useEffect, useState } from 'react';
import { UserContext } from '../../App';
import './Orders.css';
import moment from 'moment'

const Orders = () => {
    const [orders, setOrders] = useState([])
    const [user, setUser] = useContext(UserContext)
    console.log(user)

    useEffect(() => {
        fetch('https://lychee-custard-54199.herokuapp.com/orders?email=' + user.email)
            .then(res => res.json())
            .then(data => {
                setOrders(data)
                console.log(data)
            })
    }, [user.email])
    return (
        <div className='orders'>
            <h3>Buyer`s Name: {user.name}</h3>
            <p><strong>Total Orders:{orders.length}</strong></p>

            {
                orders.map(orders => <div className='order-details' key={orders._id}>
                    <p>Cake: {orders.name} </p>
                    <p>Weight: {orders.weight} </p>
                    <p>Price: {orders.price} </p>
                    <p>Order Date: {moment(orders.date).format('MMMM Do YYYY')} </p>
                </div>)
            }

        </div>
    );
};

export default Orders;