import React from 'react';
import { Link } from 'react-router-dom';

const CheckoutItem =props => {
    const details = props.pd
    
    
    const handleOrderNow = props.handleOrderNow;
    


    return (
        <div className="card container" style={{width: "18rem"}}>
            <img src={details.imageURL} class="card-img-top" alt="..."/>
            <div class="card-body">
                <h5 class="card-title">{details.name}</h5>
                <p class="card-text">Price: {details.price}</p>
                <Link to='/order'><button class="btn btn-success" onClick={() =>handleOrderNow()}>Order Now</button></Link>
            </div>
        </div>
    );
};

export default CheckoutItem;