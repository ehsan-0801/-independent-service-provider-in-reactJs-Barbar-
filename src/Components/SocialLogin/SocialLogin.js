import React from 'react';
import { useSignInWithGithub, useSignInWithGoogle } from 'react-firebase-hooks/auth';
import { useNavigate } from 'react-router-dom';
import auth from '../../firebase.init';
import Loading from '../Loading/Loading';
import google from '../../Images/social/google.png';
import github from '../../Images/social/github.png';

const SocialLogin = () => {
    const [signInWithGoogle, user, loading, error] = useSignInWithGoogle(auth);
    const [signInWithGithub, user1, loading1, error1] = useSignInWithGithub(auth);
    const navigate = useNavigate();

    let errorElement;
    if (loading || loading1) {
        return <Loading></Loading>
    }

    if (error || error1) {
        errorElement = <p className='text-danger'>Error: { error?.message } { error1?.message }</p>
    }

    if (user || user1) {
        navigate('/home');
    }
    return (
        <div>
            <div className='d-flex align-items-center'>
                <div style={ { height: '1px' } } className='bg-secondary w-50'></div>
                <p className='mt-3 px-2'>or</p>
                <div style={ { height: '1px' } } className='bg-secondary w-50'></div>
            </div>
            { errorElement }
            <div className=''>
                <button
                    onClick={ () => signInWithGoogle() }
                    className='btn btn-outline-secondary w-75 d-block mx-auto my-2'>
                    <img style={ { width: '30px' } } src={ google } alt="" />
                    <span className='px-2'>Sign in with Google</span>
                </button>

                <button

                    onClick={ () => signInWithGithub() }
                    className='btn btn-outline-dark w-75 d-block mx-auto'>
                    <img style={ { width: '30px' } } src={ github } alt="" />
                    <span className='px-2'>Github Sign In</span>
                </button>
            </div>
        </div>
    );
};

export default SocialLogin;