import React from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

const ProductList = props => {
    
    const { removeFromDom } = props;

    const deleteProduct = id => {
        axios.delete('http://localhost:8000/api/products/' + id)
            .then(res => { removeFromDom(id) })
            .catch(err => console.error(err));
    }

    return (
        <div>
            <h1>All Products</h1>
            {props.products.map((product, idx) => {
                return <p key={idx}>
                    <Link to={`/` + product._id}>
                        {product.title}
                    </Link>
                    <button onClick = {e => {deleteProduct(product._id)}}>
                        Delete
                    </button>
                </p>
            })}
        </div>
    );

}

export default ProductList;