import React, { useContext, useEffect } from 'react';
import { Table } from 'react-bootstrap';
import { useParams } from 'react-router';
import { Link } from 'react-router-dom';
import { ShopContext, UserContext } from '../../App';
import Orders from '../Orders/Orders';
import './CheckOut.css'

const CheckOut = () => {
    const [user, setUser] = useContext(UserContext);
    console.log(user)
    const [cakeShop, setCakeShop] = useContext(ShopContext);
    const { id } = useParams();
    useEffect(() => {
        const url = `https://lychee-custard-54199.herokuapp.com/cakeShop/${id}`
        fetch(url)
            .then(res => res.json())
            .then(data => setCakeShop(data))
    }, [])
    const { name, weight, price } = cakeShop;
    const handleCheckOut = () => {
        const orders = { ...user, ...cakeShop, date: new Date() }
        fetch('https://lychee-custard-54199.herokuapp.com/addOrders', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(orders)
        })
            .then(res => res.json())
            .then(data => {
             if(data){
                 <Orders></Orders>
                 alert(`Order Placed SuccessFully!! 
                       Please Check on orders Section for Full Order details `)

             }

            })
    }

    return (
        <div className="container">
            <h3>Hello!! {user.name}, Please check your Order Details from below</h3>
            <Table className="checkOut-table" striped bordered hover variant="dark">
                <thead>
                    <tr>
                        <th>Product Name</th>
                        <th>Quantity</th>
                        <th>Weight</th>
                        <th>Price</th>

                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>{name}</td>
                        <td>1</td>
                        <td>{weight}</td>
                        <td>{price}</td>
                    </tr>
                </tbody>

            </Table>
            <div className="d-flex justify-content-around" >
                <button className="btn btn-success " onClick={handleCheckOut}>CheckOut</button>
            </div>

        </div>
    );
};

export default CheckOut;