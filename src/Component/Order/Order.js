import React, { useContext, useEffect, useState } from 'react';
import { UserContext } from '../../App';
import OrderItem from '../OrderItem/OrderItem';

const Order = () => {
const [isDataLoad,setIsDataLoad] = useState(true)
const [orderedItem, setOrderedItem] = useState([]);
const [loggedInUser, setLoggedInUser] = useContext(UserContext);
const email = loggedInUser.email
useEffect(() => {
    fetch('https://ancient-waters-92510.herokuapp.com/orderPreview/' + email)
    .then(res => res.json())
    .then(data => {
        setOrderedItem(data)
        setIsDataLoad(false)})
},[])

    return (
       <div>
           <div className="container">
                <div className="row bg-dark text-white p-2 pt-3 mb-3 rounded">
                    <div className="d-flex justify-content-center col-3">
                        <h4>Name</h4>
                    </div>
                    <div className="d-flex justify-content-center col-3">
                        <h4>Price</h4>
                    </div>
                    <div className="d-flex justify-content-center col-3">
                        <h4>Quantity</h4>
                    </div>
                    <div className="d-flex justify-content-center col-3">
                        <h4>Method</h4>
                    </div>
                </div>
            </div>
               {
                   isDataLoad && <div class="spinner-border text-success" style={{textAlign: 'center'}}  role="status">
                   <span class="sr-only"></span>
                 </div>
               }
            <div className="mb-5">
                {
                orderedItem.map(item => <OrderItem item={item}></OrderItem>)
                }
            </div>
       </div>
    );
};

export default Order;