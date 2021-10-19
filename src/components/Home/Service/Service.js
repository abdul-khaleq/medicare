import React from 'react';
import { Card, Col, Row } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const Service = (props) => {
    const { name, price, imageURL, description, id } = props.service;
    return (
        <div>
    <Col>
      <Card className="pb-3">
        <Card.Img variant="top" src={imageURL} />
        <Card.Body>
          <Card.Title>{name}</Card.Title>
          <Card.Text>
    description{description}
          </Card.Text>
        </Card.Body>
        <Link to={`/servicedetail/${id}`}><button className="btn btn-success">Details</button> </Link> 
      </Card>
    </Col>
        </div>
    );
};

export default Service;