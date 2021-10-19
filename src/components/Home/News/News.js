import React from 'react';
import newsimg from '../../../images/news.jpg'

const News = () => {
    return (
        <div>
            <div class="container py-5">
  <div class="row row-cols-1 row-cols-md-2">
    <div class="col">
        <h1>GET THE NOTIFICATION</h1>
        <h1>We have some <br />
Good news</h1>
<p>Sign up for Medicare newsletter to receive all the new offers and discounts from Medicare clinic. Discounts are only valid four our newsletter subscribers.</p>
<div className="py-3">
<form class="row g-3">
  <div class="col-auto">
    <label for="staticEmail2" class="visually-hidden">Email</label>
    <input type="email" class="form-control" id="staticEmail2" placeholder="Your email"/>
  </div>
  <div class="col-auto">
    <button type="submit" class="btn btn-primary mb-3">Suscribe Now</button>
  </div>
</form>
</div>
    </div>
    <div class="col"><img src={newsimg} alt="" /></div>
  </div>
</div>
        </div>
    );
};

export default News;