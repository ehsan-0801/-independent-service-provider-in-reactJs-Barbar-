import React from 'react';
import { useNavigate } from 'react-router-dom';

const Service = ({ service }) => {
    const { serviceId, serviceName, image, description, price, homeService } = service;
    const navigate = useNavigate();

    const navigateToServiceDetail = id => {
        navigate(`/checkout/${serviceId}`);
    }
    return (
        <div className='service col-lg-4 col-md-6 col-sm-12 my-4 p-2 border border-secondary '>
            <img className='w-100' style={ { height: '400px' } } src={ image } alt={ serviceName } />
            <h2>{ serviceName }</h2>
            <div className="row w-100 mx-auto" style={ { backround: '' } }>
                <div className="col-md-6 border border-1 border-secondary">
                    <p>Price: { price }</p>
                </div>
                <div className="col-md-6 border border-1 border-secondary">
                    <p>Homeservice: { homeService }</p>
                </div>
            </div>
            <p className="border border-1 border-secondary">{ description }</p>
            <button onClick={ () => navigateToServiceDetail(serviceId) } className='btn btn-outline-secondary' >PROCEED CHECKOUT</button>
        </div >
    );
};

export default Service;