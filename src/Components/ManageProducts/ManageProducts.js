import React, { useContext } from 'react';
import { Table } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { ShopContext } from '../../App';
import ProductDetails from '../ProductDetails/ProductDetails';
import './ManageProducts.css'

const ManageProducts = () => {
    const [cakeShop, setCakeShop] = useContext(ShopContext);

    return (
        <div className="addProductContainer">
            <div className="sidenav">
                <Link to="/manageProducts">Manage Products</Link>
                <Link to="/addProducts">Add Products</Link>
                <Link to="#">Edit Products</Link>
                <Link to="/home">Home</Link>

            </div>
            <Table className="product-table" striped bordered hover variant="dark">
                <thead>
                    <tr>
                        <th>Product Name</th>
                        <th>Weight</th>
                        <th>Price</th>
                        <th>Action</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        cakeShop.map(item => <ProductDetails key={item._id} item={item}></ProductDetails>)
                    }
                </tbody>

            </Table>
        </div>
    );
};

export default ManageProducts;