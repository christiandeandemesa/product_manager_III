import axios from 'axios';
import React, { useEffect, useState } from 'react';
import ProductForm from '../components/ProductForm';
import ProductList from '../components/ProductList';

const Main = props => {

    const [products, setProducts] = useState([]);
    const[loaded, setLoaded] = useState(false);

    useEffect(() => {
        axios.get('http://localhost:8000/api/products')
        .then (res => {
            setProducts(res.data);
            setLoaded(true);
        })
        .catch(err => console.log(err))
    }, []);

    const removeFromDom = id => {
        setProducts(products.filter(product => product._id !== id));
    }

    return (
        <div>
            <ProductForm />
            <hr />
            {loaded && <ProductList products = {products} removeFromDom={removeFromDom}/>}
        </div>
    );

}

export default Main;