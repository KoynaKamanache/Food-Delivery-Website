import React, {useEffect, useRef, useState } from 'react'
import { useDispatchCart, useCart } from './ContextReducer';

function Card(props) {
    let data = useCart();
    let priceRef = useRef();
    let dispatch = useDispatchCart();
    let options = props.options[0];
    let priceOptions = Object.keys(options);
    const [qty, setQty] = useState(1);
    const [size, setSize] = useState("");

    // let foodItem = props.foodItems;
    const handleAddToCart = async() =>{
        let food = [];
        for(const item of data){
            if(item.id === props.foodItem._id){
                food = item;

                break
            }
        }

        if(Object.keys(food).length !== 0){
            if(food.size === size){
                await dispatch({type:"UPDATE",id:props.foodItem._id, price:finalPrice, qty:qty})
                return
            }
            else if(food.size !== size){
                await dispatch({type:"ADD",id:props.foodItem._id, name:props.foodItem.name, price:finalPrice, qty:qty, size: size})
                await console.log(data);
                return 
            }
            return
        }
        await dispatch({type:"ADD",id:props.foodItem._id, name:props.foodItem.name, price:finalPrice, qty:qty, size: size})
        
    }
    let finalPrice = qty * parseInt(options[size]);
    useEffect(() =>{
        setSize(priceRef.current.value)
    }, [])
  return ( 
    <div>
            <div className="card mt-3" style={{"width": "18rem","maxHeight":"560px","border":"2px solid grey" }}>
            <img src={`http://localhost:4000/images/${props.foodItem.img}`} className="card-img-top" alt="..." style = {{height:"150px", objectFit:'fill'}}/>
            <div className="card-body" style={{"backgroundColor":"#2a2a2a"}}>
                <h5 className="card-title" style={{"color":"white","fontSize":"20px"}}>{props.foodItem.name}</h5>
                <div className='container w-100'>
                    <select className='m-2 h-100  bg-success rounded' style={{"color":"white","fontSize":"15px"}} onChange={(e)=>setQty(e.target.value)}>
                        {Array.from(Array(6), (e, i)=>{
                            return(
                                <option key={i+1} value={i+1}> {i+1} </option>
                            )
                        })}
                    </select>

                    <select className='m-2 h-100  bg-success rounded' style={{"color":"white",}} ref = {priceRef} onChange={(e)=>setSize(e.target.value)}>
                        {priceOptions.map((data)=>{
                            return <option key={data} value={data}>{data}</option>
                        })}
                    </select>

                    <div className='d-inline h-100 fs-6' style={{"color":"white","fontSize":"15px"}}>₹{finalPrice}/-</div>
                </div>
                <hr>
                </hr>
                <button className={`btn btn-success justify-center ms-2`} onClick={handleAddToCart}>Add to Cart</button>
            </div>
            </div>
        </div>
  )
}

export default Card