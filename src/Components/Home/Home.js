import React, { useContext } from 'react';
import { Spinner } from 'react-bootstrap';
import { ShopContext } from '../../App';
import CakeShop from '../CakeShop/CakeShop';
import './Home.css'

const Home = () => {
    const [cakeShop, setCakeShop] = useContext(ShopContext);

    return (
        <div className='shop-container' >
            {cakeShop.length === 0 && <div style={{ margin: '200px 300px 0px 600px' }}> <Spinner animation="grow" variant="danger" /> <Spinner animation="grow" size="sm" variant="danger" /></div>}


            {
                cakeShop.map(cake => <CakeShop key={cake._id} cake={cake}></CakeShop>)
            }

        </div>
    );
};

export default Home;