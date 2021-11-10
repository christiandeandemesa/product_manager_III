import React, { useState } from 'react';
import axios from 'axios';
import styles from './ProductForm.module.css';

export default () => {
    const [title, setTitle] = useState('');
    const [price, setPrice] = useState('');
    const [description, setDescription] = useState('');

    const onSubmitHandler = e => {
        e.preventDefault();
        axios.post('http://localhost:8000/api/products',
            {
                title,
                price,
                description
            })
            .then(res => console.log(res))
            .catch(err => console.log(err));
        setTitle('');
        setPrice('');
        setDescription('');
    }

    return (
        <div className={styles.flexBox}>
            <h1>Product Manager</h1>
            <form onSubmit={onSubmitHandler} className={styles.form}>
                <p className={styles.field}>
                    <label>Title</label>
                    <input type='text' onChange={e => setTitle(e.target.value)} value={title} className={styles.input} />
                </p>
                <p className={styles.field}>
                    <label>Price</label>
                    <input type='text' onChange={e => setPrice(e.target.value)} value={price} className={styles.input} />
                </p>
                <p className={styles.field}>
                    <label>Description</label>
                    <input type='text' onChange={e => setDescription(e.target.value)} value={description} className={styles.input} />
                </p>
                <button className={styles.btn}>Create</button>
            </form>
        </div>
    );

}