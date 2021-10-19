import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';

const ServiceDetail = () => {
    const {id} = useParams();
    const [details , setDetails] = useState([]);
    useEffect(()=>{
        fetch('/fakeData.json')
        .then(res => res.json())
        .then(data => setDetails(data))
    },[])
    const d = details.filter(detail => detail.id === id);
    console.log(d)
    return (
        <div>
            <h2>{d[0]?.name} </h2>
            <h2>{d[0]?.description} </h2>
        </div>
    );
};

export default ServiceDetail;