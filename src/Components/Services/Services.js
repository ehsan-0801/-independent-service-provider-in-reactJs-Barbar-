import React, { useEffect, useState } from 'react';
import Service from '../Service/Service';

const Services = () => {
    const [services, setServices] = useState([]);

    useEffect(() => {
        fetch('services.json')
            .then(res => res.json())
            .then(data => setServices(data));
    }, [])
    return (
        <div id="services" className='container'>
            <div className="row">
                <h1 className='text-secondary text-center border-bottom fw-bold my-5'>My Services</h1>
                <div className="services-container row g-3 ">
                    {
                        services.map(service => <Service
                            key={ service.serviceId }
                            service={ service }
                        >
                        </Service>)
                    }
                </div>
            </div>
        </div>
    );
};

export default Services;