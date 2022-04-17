import React from 'react';
import './PageHeader.css'
const PageHeader = () => {
    return (
        <div>
            <div >
                <p className="text-center text-dark fs-2 fw-bold">Mr. X The Barbar</p>
            </div>
            <div className="container my-5">
                <h2 className="text-center text-primary">Why will you choose Me?</h2>
                <div id="flip" className="text-center">
                    <div><div>TRUSTWORTHY</div></div>
                    <div><div>HARDWORKING</div></div>
                    <div><div>ENTHUSIASTIC</div></div>
                </div>
            </div>
            <div className="container">
                <div className="text-center my-2">
                    <span className="mx-3 text-center text-primary">PHONE:01XXXXXXXX</span>
                    <span className="mx-3 text-center text-primary">EMAIL:abc@gmail.com</span>
                </div>
            </div>
        </div>
    );
};

export default PageHeader;