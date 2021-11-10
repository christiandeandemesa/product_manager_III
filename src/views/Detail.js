import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useParams, Link, useHistory } from 'react-router-dom';

const Detail = props => {

    const [product, setProduct] = useState({});
    const { id } = useParams();
    const history = useHistory();

    /*const editPage = id => {
        axios.get('http://localhost:8000/' + id + '/edit')
            .then(res => id)
            .catch(err => console.error(err));
    }*/

    const deleteProduct = id => {
        axios.delete('http://localhost:8000/api/products/' + id)
            .then(res => id)
            .catch(err => console.error(err));
        history.push('/');
    }

    useEffect(() => {
        axios.get('http://localhost:8000/api/products/' + id)
            .then(res => setProduct(res.data))
            .catch(err => console.error(err));
    }, []);

    return (
        <div>
            <h1>{product.title}</h1>
            <p>Price: {product.price}</p>
            <p>Description: {product.description}</p>
            <Link to={'/' + product._id + '/edit'}>
                Edit
            </Link><br />
            {/*<button onClick={e => { editPage(product._id) }}>
                Edit
            </button><br />*/}
            <button onClick={e => { deleteProduct(product._id) }}>
                Delete
            </button><br />
            <Link to={'/'}>Home</Link>
        </div>
    );

}

export default Detail;