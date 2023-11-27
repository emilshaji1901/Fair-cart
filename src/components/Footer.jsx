import React from 'react'
import { Link } from 'react-router-dom';

function Footer() {
  const linkStyle = {
    textDecoration: 'none',
    color: 'white',
  };
  return (
    <div style={{ height: '300px', color:'white', marginTop:'10px' }} className='d-flex justify-content-center align-items-center w-100 mt-3 flex-column bg-primary'>
      <div className='d-flex justify-content-evenly align-items-center w-100'>
        <div className="websites" style={{ width: '400px' , marginTop:'50px'}}>
          <h4 className='mb-1' style={{overflowY:'hidden', marginTop:'50px'}}>
          <i class="fa-solid fa-cart-shopping me-2"></i>
            Fair Cart
          </h4>
          <h6 className='ms-1' style={{overflowY:'hidden'}}>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi odio nihil enim repellat quisquam
            optio alias totam, quos expedita ipsa, ad tempore vero maiores officiis veniam consectetur porro
            numquam dignissimos.
          </h6>
        </div>

        <div className="links d-flex flex-column">
          <h4 className="mb-3" style={{overflowY:'hidden'}}>Links</h4>
          <Link to={'/'} style={linkStyle}>Home </Link>
          <Link to={'/cart'} style={linkStyle}>Cart</Link>
          <Link to={'/wishlist'} style={linkStyle}>Wishlist</Link>
        </div>

        <div className="guides d-flex flex-column">
          <h4 className="mb-3" style={{overflowY:'hidden'}}>Guides</h4>
          <Link to={'/'} style={linkStyle}>React</Link>
          <a href='https://react-bootstrap.github.io/' style={linkStyle} target='_blank' rel='noopener noreferrer'>React Bootstrap</a>
          <a href='https://bootswatch.com/' style={linkStyle} target='_blank' rel='noopener noreferrer'>Bootswatch</a>
        </div>

        <div className="contacts d-flex flex-column " style={{overflowY:'hidden'}}>
          <h4  className="contacts d-flex flex-column" style={{overflowY:'hidden'}}>Contact Us</h4>
          <div className='d-flex'>
            <input type="text" className='form-control' placeholder='Enter your mail id' />
            <button className='btn btn-warning ms-2 d-flex justify-content-center align-items-center'>Subscribe</button>
          </div>
          <br />

          <div className="d-flex justify-content-evenly align-items-center ">
            <Link to={'/'} style={linkStyle}><i className="fa-brands fa-instagram fa-2x"></i></Link>
            <Link to={'/'} style={linkStyle}><i className="fa-brands fa-x-twitter fa-2x"></i></Link>
            <Link to={'/'} style={linkStyle}><i className="fa-brands fa-linkedin fa-2x"></i></Link>
            <Link to={'/'} style={linkStyle}><i className="fa-brands fa-facebook fa-2x"></i></Link>
          </div>
        </div>
      </div>

      <p className='mt-5' style={{overflowY:'hidden'}}>Copyright ©2023 Fair Cart Buit with React All rights reserved</p>
    </div>
  );
}

export default Footer