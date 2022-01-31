import React, { useEffect, useState } from "react";
import axios from 'axios';
import { Link } from 'react-router-dom';

const ProductList = (props) => {
    const [products, setProducts] = useState([]);

    useEffect(() => {
        axios.get('http://localhost:8000/api/products')
            .then(res => setProducts(res.data))
            .catch(err => console.error(err));
    }, [products])
    return (
        <div>
            {
            products.map( (product, i) => 
                <div className='d-flex justify-content-center text-light'>
                    <p key={i}>Title: <Link to={'/products/'+ product._id}> {product.title} </Link></p>
                </div>
            )}   
        </div>
    )
}

export default ProductList;