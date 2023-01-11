import React from 'react'
import '../components/Products.css'
import { useState } from 'react';

function Products({src, title, desc, btn}) {
    const myStyles = {
        width: "18rem"
    }

    let [name, setName] = useState("Add to Cart")

    function handleSell() {
        setName( function popMessage() {
            alert("Sold")
        })
    }

    return ( 
        <>
         <div className="card" style={myStyles}>
            <img src={src}  className="card-img-top" alt="..."/>
            <div className="card-body">
                <h5 className="card-title">{title}</h5>
                <p className="card-text">{desc}</p>
                <button onClick={handleSell} href="#" className="btn btn-primary">{name}</button>
            </div>
        </div>
        </>
     );
}

export default Products;