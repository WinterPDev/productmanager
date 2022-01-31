import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useParams, useHistory } from 'react-router-dom';
import ProductForm from '../components/ProductForm';
import DeleteButton from '../components/DeleteButton';

const Update = (props) => {
    const { id } = useParams();
    const history = useHistory();
    const [product, setProduct] = useState("");
    const [loaded, setLoaded] = useState(false);

    useEffect(() => {
        axios.get('http://localhost:8000/api/products/' + id)
            .then(res => {
                setProduct(res.data);
                setLoaded(true);
            })
    }, []);

    const updateProduct = product => {
        axios.put('http://localhost:8000/api/products/' + id, product)
            .then(res => console.log(res))
    }

    return (
<div>

            {loaded && (
                <>
                <h2 className='text-center text-light'>Update a Product</h2>
                    <ProductForm
                        onSubmitProp={updateProduct}
                        initialTitle={product.title}
                        initialPrice={product.price}
                        initialDescription={product.description}
                        />
                    <DeleteButton productId={product._id} successCallback={() => history.push('/')} />
                </>
            )}

            </div>
    )
}

export default Update;