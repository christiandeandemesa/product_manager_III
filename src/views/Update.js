import React, {useEffect, useState} from 'react';
import axios from 'axios';
import {useParams, Link, useHistory} from 'react-router-dom';
import styles from './Update.module.css';

const Update = props => {
    const {id} = useParams();
    const [title, setTitle] = useState('');
    const [price, setPrice] = useState('');
    const [description, setDescription] = useState('');
    const history = useHistory();

    useEffect(() => {
        axios.get('http://localhost:8000/api/products/' + id)
            .then(res => {
                setTitle(res.data.title);
                setPrice(res.data.price);
                setDescription(res.data.description);
            })
    }, []);

    const updateProduct = e => {
        e.preventDefault();
        axios.put('http://localhost:8000/api/products/' + id, {
            title,
            price,
            description
        })
            .then(res => console.log(res))
            .catch(err => console.error(err));
        history.push('/');
    }

    return (
        <div className={styles.flexBox}>
            <h1>Update a Product</h1>
            <form onSubmit = {updateProduct} className = {styles.form}>
                <p className = {styles.field}>
                    <label>Title</label>
                    <input type = 'text' value = {title} onChange = {e => {setTitle(e.target.value)}} className={styles.input}/>
                </p>
                <p className = {styles.field}>
                    <label>Price</label>
                    <input type = 'text' value = {price} onChange = {e => {setPrice(e.target.value)}} className={styles.input}/>
                </p>
                <p className = {styles.field}>
                    <label>Description</label>
                    <input type = 'text' value = {description} onChange = {e => {setDescription(e.target.value)}} className={styles.input}/>
                </p>
                <button className={styles.btn}>Update</button><br />
                <Link to={'/'}>Home</Link>
            </form>
        </div>
    );

}

export default Update;