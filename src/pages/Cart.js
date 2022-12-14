import React from "react";
import {useSelector} from "react-redux"
// import { remove } from "../store/cartSlice";

export default function Cart(){
    const products  = useSelector(state => state.cart)
    return(
        <>
        <div>
            <h2>Cart</h2>
            <div>
                {
                    products.map((product) =>{
                        return(


                        <div>
                            <img src={product.image} alt={product.title}/>
                            <h4>{product.title}</h4>
                            <h6>{product.price}</h6>
                            <button >Remove</button>
                        </div>
                        )
                    })
                }
            </div>
        </div>

        </>
    )
}