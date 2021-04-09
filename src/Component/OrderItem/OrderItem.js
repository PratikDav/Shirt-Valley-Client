import React, { useEffect, useState } from 'react';
import ViewItem from '../ViewItem/ViewItem';

const OrderItem = props => {
    console.log(props)
    const orderItem = props.item.order

    const [deleteItem, setDeleteItem] =useState([]);

   

    
    return (
       <div className='container'>
           
                {
                    orderItem.map(item => <ViewItem item={item}></ViewItem>)
                }

       </div>
    );
};

export default OrderItem;