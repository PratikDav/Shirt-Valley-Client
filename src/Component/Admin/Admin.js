import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useForm } from "react-hook-form";
import './Admin.css'
import ManageProduct from '../ManageProduct/ManageProduct';
import { useParams } from 'react-router';

const Admin = () => {
    const { register, handleSubmit } = useForm();

    const [imageURL, setImageURL] = useState(null)


    const onSubmit = data => {
        const eventInfo = {
            name : data.name,
            price : data.price,
            imageURL : imageURL
        }
        const url = `https://ancient-waters-92510.herokuapp.com/addProduct`
        console.log(eventInfo)

        fetch(url, {
            method: 'POST',
             headers:{
                 'content-type': 'application/json'
             },
             body: JSON.stringify(eventInfo)
        })
        .then(res => console.log('response verified', res))
        console.log(data)
    };

    const handleImageUpload = event => {
        console.log(event.target.files[0]);
        const imageInfo = new FormData()
        imageInfo.set('key', 'a6469aee0040cbac3dcd7fd3a114deda')
        imageInfo.append('image', event.target.files[0])
        
        axios.post('https://api.imgbb.com/1/upload',
        imageInfo)
        .then(res => {
            setImageURL(res.data.data.display_url)
        })
        .catch(err =>{
            console.log(err)
        })
    }


    const [addProduct,setAddProduct] = useState(false)

    const {productId} = useParams()
    const [isDataLoad,setIsDataLoad] = useState(true)
    const [products, setProduct] = useState([])

    useEffect(() => {
        fetch('https://ancient-waters-92510.herokuapp.com/product')
        .then(res => res.json())
        .then(data => {
            setProduct(data)
            setIsDataLoad(false)})
    }, [])


    const handleDelete = (event) => {
        fetch(`https://ancient-waters-92510.herokuapp.com/delete/${productId}`,{
            method: 'DELETE',
        })
        .then(res => res.json())
        .then(data =>{
            if(data){
                event.target.parentNode.style.display = 'none'
            }
        })
    }


    return (
        
           <div className="d-flex sidebar">
               <div class="sidenav bg-dark rounded">
                    <input className="btnStyle" type="button" name='AddProduct' onClick={()=> setAddProduct(!addProduct)} value="Add Product"/>
                    <input className="btnStyle" type="button" name='Manage' onClick={()=> setAddProduct(!addProduct)} value="Manage Product"/>
                </div>
               <div className="main">
                   {
                       addProduct ? <form onSubmit={handleSubmit(onSubmit)}>
                                        <label>Product Name</label><br/>
                                        <input name="name" placeholder="Product Name" ref= {register("name", { required: true })} />
                                        <br/>
                                        <label>Product Price</label><br/>
                                        <input name="price" placeholder="Product Price" ref= {register("name", { required: true })}/>
                                        <br/>
                                        <input name="exampleRequired" type="file" onChange={handleImageUpload} />
                                        <br/>
                                        <input type="submit" value="Save"/>

                                    </form>
                                  : <div>
                                       <div className="container">
                                            <div className="row bg-dark  text-white p-2 pt-3 mb-3 rounded">
                                                <div className="d-flex justify-content-center col-3">
                                                    <h4>Name</h4>
                                                </div>
                                                <div className="d-flex justify-content-center col-3">
                                                    <h4>Price</h4>
                                                </div>
                                                <div className="d-flex justify-content-center col-3 mx-2">
                                                    <h4>Method</h4>
                                                </div>
                                            </div>
                                        </div>
                                            {
                                                isDataLoad && <div class="spinner-border text-success" style={{textAlign: 'center'}}  role="status">
                                                <span class="sr-only"></span>
                                                </div>
                                            }
                                        <div>
                                            {
                                                products.map(product => <ManageProduct product={product} handleDelete={handleDelete} key={product._id}/>)
                                            }
                                        </div>    
                                    </div>
                   }
                   
               </div>
           </div>
      
    );
};

export default Admin;