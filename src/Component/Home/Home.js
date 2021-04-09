import React, { useEffect, useState } from 'react';


import Product from '../Products/Product';


const Home = () => {
    const [isDataLoad,setIsDataLoad] = useState(true)
    const [products, setProduct] = useState([])

    useEffect(() => {
        fetch('https://ancient-waters-92510.herokuapp.com/product')
        .then(res => res.json())
        .then(data => {
            setProduct(data)
            setIsDataLoad(false)})
    }, [])

    const [selectedProducts, setSelectedProducts] = useState([]);

    const handleBuying = (product) => {
        const newSelectedProducts = [...selectedProducts , product];
        setSelectedProducts(newSelectedProducts);
    } 

    return (
        <div>
            <div>
                {
                   isDataLoad && <div class="spinner-border text-success" style={{textAlign: 'center'}} role="status">
                   <span class="sr-only"></span>
                 </div>
                }
            </div>
            <div  className='row'>
                {
                    products.map(product => <Product product={product} handleBuying={handleBuying} key={product._id}/>)
                }
            </div>
        </div>
    );
};

export default Home;