import React from 'react'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Link } from 'react-router-dom';
import Badge from 'react-bootstrap/Badge';
import { useSelector } from 'react-redux';


function Header() {
        const wishlist =useSelector((state)=>state.wishlistReducer)
          console.log(wishlist);
          const cart = useSelector((state)=>state.cartReducer)
          console.log(cart);
        return (
    <Navbar expand="lg" className="bg-primary fixed-top" >
    <Container>
      <Navbar.Brand ><Link to={'/'} style={{textDecoration:'none',color:'white'}}>Fair Cart<i class="fa-solid fa-cart-shopping me-2"></i></Link></Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="ms-auto">

          <Nav.Link className='btn border border-secondary rounded ms-3 mt-2' ><Link to={'/wishlist'}  style={{textDecoration:'none',color:'white'}}>Wishlist<Badge bg="secondary" className='rounded ms-2'>{wishlist.length}</Badge></Link></Nav.Link>

          <Nav.Link  className='btn border border-secondary rounded ms-3 mt-2'><Link to={'/cart'}  style={{textDecoration:'none',color:'white'}}>Cart<Badge bg="secondary" className='rounded ms-2'>{cart.length}</Badge ></Link></Nav.Link>
          
        </Nav>
      </Navbar.Collapse>
    </Container>
  </Navbar>
  )
}

export default Header