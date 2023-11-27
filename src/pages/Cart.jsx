import React, { useEffect, useState } from 'react'
import Button from 'react-bootstrap/Button';
import { useDispatch, useSelector } from 'react-redux';
import { emptyCart, removeFromCart } from '../redux/slices/cartSlice';
import { useNavigate } from 'react-router-dom';

function Cart() {
  const cartArray = useSelector((state)=>state.cartReducer)
/*   console.log(cartArray); */
  const dispatch = useDispatch()
  const [total,setTotal]=useState(0)
  const navigate =useNavigate()

  const getTotal =()=>{
    if(cartArray.length>0){
       setTotal(cartArray?.map(item=>item.price).reduce((p1,p2)=>p1+p2))
      }
      else{
        setTotal(0)
      }
  }

  useEffect(()=>{
    getTotal()
  },[cartArray])
  
  const handleCart = ()=>{
    alert('Thankyou....Your order placed sussefully')
    dispatch(emptyCart())
    navigate('/')
  }


  return (
    
    
      <div style={{marginTop:'150px', marginBottom:'50px'}}>
      {cartArray?.length>0?
      <div className='row w-100'>
      
      <div className='col-lg-6 m-5'>
        <table className='table border shadow'>
        <thead>
          <tr>
            <th>#</th>
            <th>Product</th>
            <th>Image</th>
            <th>Price</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {cartArray?.map((item,index)=>(
            <tr>
            <td>{index+1}</td>
            <td>{item.title}</td>
            <td><img width={'100px'} height={'100px'} src={item.thumbnail} alt="" /></td>
            <td>$ {item.price}</td>
            <td><Button  onClick={()=>dispatch(removeFromCart(item.id))} variant="outline-danger rounded"><i class="fa-solid fa-trash"></i></Button></td>
          </tr>))}
        </tbody>
      </table>
      </div>
      
            <div className="col-lg-4 d-flex justify-content-center align-item-center flex-column">
                <div className='border shadow p-5' >
                  <h2  style={{overflowY:'hidden'}} className='text-secondary'>Cart summary</h2>
                  <h4 style={{overflowY:'hidden'}}>Total number of products :{cartArray.length}</h4>
                  <h4 style={{overflowY:'hidden'}}>Total Price: {total}</h4>
                  <button onClick={handleCart} className='btn btn-success rounded w-100 mt-3'>Buy</button>
                </div>
            </div>

      </div>  :<div style={{height:'300px'}} className='d-flex flex-column justify-content-center align-items-center'>
        <img src="https://www.qrcardboard.com/images/cart.gif?v=01" alt="no img" height={'300px'} /> 
        <h4 className='text-danger mt-1' style={{overflowY:'hidden'}}>YOUR CART IS EMPTY</h4> </div>
     }
    </div>
 
  )
}

export default Cart