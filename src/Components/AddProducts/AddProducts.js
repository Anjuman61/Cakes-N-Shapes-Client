import React, { useState } from 'react';
import './AddProducts.css'
import { useForm } from "react-hook-form";
import { Link } from 'react-router-dom';
import axios from 'axios';

const AddProducts = () => {
  const { register, handleSubmit, watch, errors } = useForm();
  const [imageURL, setImageURL] = useState(null);

  const handleImageUpload = (event) => {
    console.log(event.target.files[0])
    const imageData = new FormData()
    imageData.set('key', '186702170cb008d656d0922fc6805fce')
    imageData.append('image', event.target.files[0])

    axios.post('https://api.imgbb.com/1/upload', imageData)
      .then(function (response) {
        setImageURL(response.data.data.display_url);
      })
      .catch(function (error) {
        console.log(error);
      });
  }

  const onSubmit = data => {
    console.log(data)
    const newProduct = {
      name: data.name,
      weight: data.weight,
      price: data.price,
      imageURL: imageURL
    };

    const url = `https://lychee-custard-54199.herokuapp.com/addProduct`;

    fetch(url, {
      method: 'POST',
      headers: {
        'content-type': 'application/json'
      },
      body: JSON.stringify(newProduct)
    })
      .then(res => console.log('server side response', res))
  };
  return (
    <div className="addProductContainer">
      <div className="sidenav">
        <Link to="/manageProducts">Manage Products</Link>
        <Link to="#">Add Products</Link>
        <Link to="#">Edit Products</Link>
        <Link to="/home">Home</Link>

      </div>
      <form className='container addProductForm' onSubmit={handleSubmit(onSubmit)}>
        <label>Product Name:</label>
        <input name="name" defaultValue="chocolate Cake" ref={register} />

        <label>Weight:</label>
        <input name="weight" ref={register} />

        <label>price:</label>
        <input name="price" ref={register} />

        <label>upload Image:</label>
        <input type="file" name="image" onChange={handleImageUpload} />
        <br />

        <input type="submit" className='btn btn-success' />
      </form>

    </div>
  );
};

export default AddProducts;