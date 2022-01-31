import React, { useEffect, useState } from "react";
import axios from 'axios';
import { Link } from 'react-router-dom';
import DeleteButton from "./DeleteButton";

const ProductList = (props) => {
    const [products, setProducts] = useState([]);

    useEffect(() => {
        axios.get('http://localhost:8000/api/products')
            .then(res => setProducts(res.data))
            .catch(err => console.error(err));
    }, [products])

    const removeFromDom = productId => {
        setProducts(products.filter(product => product._id != productId))
    }

    return (
        <div>
            {
            products.map( (product, i) => 
                <div className='d-flex justify-content-center text-light'>
                    <p key={i}>
                        Title: 
                            <Link to={'/products/'+ product._id} className='p-3'> 
                                {product.title} 
                            </Link>
                        |
                            <Link to={'/products/'+ product._id + '/edit'} className='p-3'> 
                                Edit
                            </Link>
                        <span className='pe-3'>|</span>  
                            <DeleteButton productId={product._id} successCallback={()=>removeFromDom(product._id)}/>
                    </p>
                </div>
            )}   
        </div>
    )
}

export default ProductList;