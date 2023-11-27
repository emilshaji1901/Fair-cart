import React from 'react'
import { Col, Row } from 'react-bootstrap'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { useDispatch, useSelector } from 'react-redux';
import { removeFromWishlist } from '../redux/slices/wishlistSlice';
import { addToWishlist } from '../redux/slices/wishlistSlice';
import { addToCart } from '../redux/slices/cartSlice';


function WishList() {
  const dispatch= useDispatch()
  const wishlistArray =useSelector((state)=>state.wishlistReducer)
  console.log(wishlistArray);
  const handlewishlist =(item)=>{
    dispatch(addToCart(item))
    dispatch(removeFromWishlist(item.id))
  }
  return (
    <div style={{marginTop:'100px'}}>
      <Row className='ms-5 me-5'  style={{marginTop:'100px'}}>
   {wishlistArray.length>0?
   wishlistArray?.map((item)=>( <Col className='mb-5' sm={12} md={6} lg={4} xl={3}>
   <Card style={{ width: '100%' }}>
     <Card.Img variant="top" src={item.thumbnail} style={{height:'200px' }} />
     <Card.Body>
       <Card.Title style={{ overflowY:'hidden' }} className='fw-bolder'>{item.title.slice(0,20)}...</Card.Title>
       <Card.Text>
       <p>{item.description.slice(0,40)}...</p>
       <p className='fw-bolder'>Price : {item.price}</p>
       </Card.Text>
       <div className='d-flex align-item-center justify-content-between'>
         <Button onClick={()=>dispatch(removeFromWishlist(item.id))} variant="outline-warning rounded"><i class="fa-solid fa-heart"></i></Button>
         <Button onClick={()=>handlewishlist(item)} variant="outline-primary rounded"><i class="fa-solid fa-cart-plus"></i></Button>
       </div>
     </Card.Body>
   </Card>
 </Col>)):
 <div style={{height:'300px'}} className='d-flex flex-column justify-content-center align-items-center'>
 <img src="https://cliply.co/wp-content/uploads/2019/05/371905230_ECOMMERCE_400px.gif" alt="no img" height={'300px'} /> 
 <h4 className='text-danger mt-1' style={{overflowY:'hidden'}}>NOTHING HERE</h4> </div>
   }
   </Row>
   </div>
  )
}
export default WishList