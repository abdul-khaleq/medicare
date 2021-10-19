import React from 'react';
import './Contact.css'

const Contact = () => {
    return (
        <div className='container'>
            <h1>Get in touch</h1>
            <p>Come and visit our quarters or simply send us an email anytime you want. We are open to all suggestions from our audience.</p>
            <div class="row row-cols-1 row-cols-md-3 g-4">
  <div class="col">
    <div class="card h-100">
    <i class="fas fa-address-card"></i>
      <div class="card-body">
        <h5 class="card-title">ADDRESS</h5>
        <p class="card-text">
27th Avenue <br />
New York, W2 3XE, US</p>
      </div>
    </div>
  </div>
  <div class="col">
    <div class="card h-100">
    <i class="fas fa-mobile-alt"></i>
      <div class="card-body">
        <h5 class="card-title">CALL US</h5>
        <p class="card-text">
0-800-2336-7820 <br />
0-800-2344-6477</p>
      </div>
    </div>
  </div>
  <div class="col">
    <div class="card h-100">
    <i class="far fa-envelope"></i>
      <div class="card-body">
        <h5 class="card-title">WRITE TO US</h5>
        <p class="card-text">
office@medicare.com <br />
book@medicare.com</p>
      </div>
    </div>
  </div>
  <div class="col">
    <div class="card h-100">
    <i class="fas fa-hand-holding-heart"></i>
      <div class="card-body">
        <h5 class="card-title">BOOK AN APPOINTMENT</h5>
        <p class="card-text">
Click here to book an <br />  
appointment at Medicare.</p>
      </div>
    </div>
  </div>
</div>
        </div>
    );
};

export default Contact;