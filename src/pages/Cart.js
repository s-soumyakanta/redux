import React from "react";
import {useSelector,useDispatch} from "react-redux"
import { remove } from "../store/cartSlice";

export default function Cart(){
    const dispatch = useDispatch()
    const products  = useSelector(state => state.cart)
    const handleRemove = ( productId) =>{
        dispatch(remove(productId))
    }
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
                            <button onClick={() => handleRemove(product.id)}>Remove</button>
                        </div>
                        )
                    })
                }
            </div>
        </div>

        </>
    )
}