import React from 'react';
import { Carousel } from 'react-bootstrap';
import banner1 from '../../../images/banner1.jpg'
import banner2 from '../../../images/banner2.jpg'

const Banner = () => {
    return (
        <div className=''>
            <Carousel variant="dark">
  <Carousel.Item>
    <img height='600' className="d-block w-100" src={banner1} alt="First slide"/>
    <Carousel.Caption>
      <h5>Healthy heart,healthy family  </h5>
      <p>Globally harness multimedia based collaboration and idea-sharing with
backend products. Continually whiteboard superior opportunities via
covalent scenarios.</p>
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item>
    <img height='600' className="d-block w-100 h-80" src={banner2}
      alt="Second slide"/>
    <Carousel.Caption>
      <h5>Your Wealth,
is you health</h5>
      <p>Compellingly embrace empowered e-business after user friendly
intellectual capital. Interactive y actualize front-end processes with
effective convergence.</p>
    </Carousel.Caption>
  </Carousel.Item>
</Carousel>
        </div>
    );
};

export default Banner;