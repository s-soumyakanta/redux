import {React,useState,useEffect} from "react";
import { add } from "../store/cartSlice";
import { useDispatch } from "react-redux";


export default function Products(){
    const dispatch = useDispatch()
    const [apiData,setApiData] = useState([])
    
    useEffect(()=>{
        fetch("https://fakestoreapi.com/products")
        .then(res => res.json())
        .then(data =>setApiData(data))
    
    },[])
    console.log(apiData)

    const handleAdd = (product) =>{

                dispatch(add(product))
    }
    return(
        <>
       <div className="flex flex-col items-center">
        <h1>Products
            
        </h1>
        <div className="flex flex-col w-96 h-96 ">
            {
       apiData.map((data) =>{

        return(
            <div className="m-8 " key={data.id}>
                <img alt={data.title} src={data.image} />
                <h4>{data.title}</h4>
                <p>{data.price}</p>
                <button onClick={()=> handleAdd(data)} className="bg-white text-black">Add to cart</button>
            </div>
        )
       })
            }
        </div>
       </div>
        
        </>
    )
}