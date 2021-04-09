import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';


const ViewItem = props => {
    const item = props.item
    // const userId = item._id

    // const [deleteItem, setDeleteItem] =useState([]);

    // useEffect(() => {
    //     fetch('https://ancient-waters-92510.herokuapp.com/orderCollection' )
    //     .then(res => res.json())
    //     .then(data => {
    //         setDeleteItem(data)
    //     })
    // })


    const handleCancelOrder = (productId) => {
        fetch(`https://ancient-waters-92510.herokuapp.com/delete/${productId}`,{
            method: 'DELETE',
        })
        .then(res => res.json())
        .then(result => {
            console.log('delete')
        })
    }

    return (
        
        <div>
            <div className="container">
                <div className="row  text-white p-2 pt-3 mb-3 rounded">
                    <div className="d-flex table-info text-black justify-content-center col-3">
                        <h4>{item.name}</h4>
                    </div>
                    <div className="d-flex table-info text-black justify-content-center col-3">
                        <h4>{item.price}</h4>
                    </div>
                    <div className="d-flex table-info text-black justify-content-center col-3">
                        <h4>1</h4>
                    </div>
                    <div className="d-flex table-info text-black justify-content-center col-3">
                    <button className="btn btn-danger" onClick={() => handleCancelOrder()}>Cancel Order</button>
                    </div>
                </div>
            </div>
        </div>
        
    );
};

export default ViewItem;