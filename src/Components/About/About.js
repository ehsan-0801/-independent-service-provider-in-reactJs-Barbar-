import React from 'react';
import mypic from '../../Images/MyPic.jpg'
const About = () => {
    return (
        <div className="container">
            <div className="row my-5">
                <div className="col-md-6 col-sm-12">
                    <img className="border border-5 rounded-circle p-5" style={ { width: '350px' } } src={ mypic } alt="" />
                </div>
                <div className="col-md-6 col-sm-12">
                    <h2 className="text-center text-secondary fw-bold">ABOUT ME</h2>
                    <p className="text-dark">
                        I am <span className="fw-bold border-bottom text-primary">Ehsanul Ahmmed</span> . I am a student of computer science engineering. I want to be a web developer and want to take my career as web developer in future.I have experiences in php,laravel. But I want to work on nodejs as the market demand.
                    </p>
                    <h2 className="text-center text-secondary fw-bold">GOAL</h2>
                    <p className="text-dark">
                        There is no specific goal for me. I just want to work as software developer. But in the long term I can say that I want to work as Datascience specialist in near future if Allah gives me that opportunity.
                    </p>
                </div>
            </div>
        </div>
    );
};

export default About;