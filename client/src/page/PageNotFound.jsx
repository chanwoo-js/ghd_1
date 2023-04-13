import React from 'react';
import { useNavigate } from 'react-router-dom';

const PageNotFound = () => {
    const navigate = useNavigate();

    const handleNavigate = (e) => {
        e.preventDefault();
        navigate('/');
    };

    return (
        <div>
            <h1>404</h1>
            <h2>Page Not Found</h2>
            <button onClick={handleNavigate}>Go to Home</button>
        </div>
    );
};

export default PageNotFound;
