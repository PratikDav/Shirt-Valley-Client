import React from 'react';
import {Link} from "react-router-dom";

const Product = (event) => {

    const {name, imageURL, price, _id} = event.product

    const handleBuying = event.handleBuying;
    
    
    return (
        <div style={{border: '1px solid black'}} className='col-md-3 col-sm-6 g-5'>
            <img style={{height: '280px'}}src={imageURL} alt=""/>
            <h3 style={{ textAlign: 'center'}}>{name}</h3>
            <h4 style={{ textAlign: 'center'}}>Price: {price}</h4>
            <Link to = {`/checkout/${_id}`}><button onClick={() => handleBuying(event.product)}>Buy Now</button></Link>
            
        </div>
    );
};

export default Product; 