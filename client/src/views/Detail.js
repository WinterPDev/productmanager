import React, {useEffect, useState} from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';

const Detail = (props) => {
    const [product, setProduct] = useState({});
    const { id } = useParams();

    useEffect(() => {
        axios.get('http://localhost:8000/api/products/' + id)
            .then(res => setProduct(res.data))
            .catch(err => console.error(err));
    }, []);

    return(
        <div className='container col-3 bg-dark bg-gradient border border-light rounded p-3'>
            <div className='justify-contents-center d-flexin text-light'>

            <p className='col'>Title: <span className='text-warning'>{product.title}</span></p>
            <p className='col'>Price: <span className='text-warning'>{product.price}</span></p>
            <p className='col'>Description: <span className='text-warning'>{product.description}</span></p>
            </div>
        </div>
    )

}

export default Detail;