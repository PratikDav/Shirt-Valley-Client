import React, { useContext, useEffect, useState } from 'react';
import { useHistory, useParams } from 'react-router';
import { UserContext } from '../../App';
import CheckoutItem from '../CheckoutItem/CheckoutItem';

const Checkout = () => {

    const {id} = useParams();
    const [product ,setProduct] = useState([]);
     useEffect(() => {
         const url = `https://ancient-waters-92510.herokuapp.com/product/${id}`
         fetch(url)
         .then(res => res.json())
         .then(data => { 
            setProduct(data)} )
     })
     
     const [loggedInUser, setLoggedInUser] = useContext(UserContext);

     const orderDetails = {...loggedInUser,order: product, orderTime: new Date()}
     

     const history = useHistory()

     const handleOrderNow = () =>{
         fetch('https://ancient-waters-92510.herokuapp.com/addOrder',{
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(orderDetails)
         })
         .then(res => res.json())
         .then({
             if(data){
                 alert('your order has been added')
             }
         })
         history.push('/order')
     }


    return (
        <div className="row">
           {
               product.map(pd => <CheckoutItem pd={pd} handleOrderNow={handleOrderNow}></CheckoutItem>)
           }
           
        </div>
    );
};

export default Checkout;