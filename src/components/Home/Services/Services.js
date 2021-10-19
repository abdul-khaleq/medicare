import React, { useEffect, useState } from 'react';
import { Container, Row } from 'react-bootstrap';
import Service from '../Service/Service';

const Services = () => {
    const [services, setServices] = useState([]);
    // Loading Data 
    useEffect(() => {
        fetch('./fakeData.json')
            .then(res => res.json())
            .then(data => {
                setServices(data);
            })
    }, [])
    return (
        <div id="services">
            {/* render vehicles from server side */}
            <Container className='py-5'>
                <h1>Our services</h1>
                <Row xs={1} md={3} className="g-4">
                {
                    services.map(service => <Service service={service}></Service>)
                }
                </Row>
            </Container>
        </div>
    );
};

export default Services;