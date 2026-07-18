import React from 'react';
import { FaLeaf } from 'react-icons/fa';
import './Loading.css';

const Loading = ({ message = "Loading Podago Portal..." }) => {
    return (
        <div className="loading-container">
            <div className="loading-content">
                <div className="spinner-ring"></div>
                <div className="logo-pulse"><FaLeaf color="#10B981" /></div>
                <p className="loading-text">{message}</p>
            </div>
        </div>
    );
};

export default Loading;
