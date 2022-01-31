import React, { useState } from 'react';
import axios from 'axios';

export default () => {
    const [title, setTitle] = useState("");
    const [price, setPrice] = useState(0);
    const [description, setDescription] = useState("");
    
    const onSubmitHandler = e => {
        e.preventDefault();
        axios.post('http://localhost:8000/api/product/create', {
            title,
            price,
            description
        })
            .then(res=>console.log(res))
            .catch(err=>console.log(err))
    }

    return (
        <div className='container col-3 bg-secondary bg-gradient border border-light rounded p-3'>
            <h2 className='text-center'>Product Manager</h2>
        <div className='justify-content-center text-light'>
            <form onSubmit={onSubmitHandler}>
                <div className='form-group'>
                    <p>
                        <label htmlFor='title'>Title</label>
                        <input className='form-control' type="text" onChange={(e)=>setTitle(e.target.value)} value={title}/>
                    </p>
                </div>
                <div className='form-group'>
                    <p>
                        <label htmlFor='price'>Price</label>
                        <input className='form-control' type="number" onChange={(e)=>setPrice(e.target.value)} value={price}/>
                    </p>
                </div>
                <div className='form-group'>
                    <p>
                        <label htmlFor='description'>Description</label>
                        <input className='form-control' type="text" onChange={(e)=>setDescription(e.target.value)} value={description}/>
                    </p>
                </div>
                <div className='text-center'>
                    <input className='btn btn-primary' type="submit"/>
                </div>
            </form>
        </div>
        </div>
    )

}