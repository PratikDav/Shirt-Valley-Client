import React from 'react';

const ManageProduct = props => {
    console.log(props)
    const {name,  price} = props.product
    
   
    const handleDelete = props.handleDelete
   
    return (
        <div>
             <div className="container">
                <div className="row  text-white p-2 pt-3 mb-3 rounded">
                    <div className="d-flex table-info text-black justify-content-center col-3">
                        <h4>{name}</h4>
                    </div>
                    <div className="d-flex table-info text-black justify-content-center col-3">
                        <h4>{price}</h4>
                    </div>
                    <div className="d-flex table-info text-black justify-content-center col-3">
                    <button className="btn btn-danger" style={{color: 'white'}} onClick={() => handleDelete()}>Delete</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ManageProduct;