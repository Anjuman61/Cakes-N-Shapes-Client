
import React from 'react';
import { Button } from 'react-bootstrap';


const ProductDetails = (props) => {
    const { name, weight, price, _id } = props.item;
    const deleteProduct = (id) => {
        fetch(`https://lychee-custard-54199.herokuapp.com/product/${id}`, {
            method: 'DELETE',
            headers: {
                'Content-Type': 'application/json'
            }
        })
            .then(res => res.json())
            .then(result => console.log(result))

    }
    return (
        <tr>
            <td>{name}</td>
            <td>{weight}</td>
            <td>{price}</td>
            <td><Button onClick={() => deleteProduct(_id)}>Delete</Button></td>
        </tr>
    );
};

export default ProductDetails;