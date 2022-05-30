import React from 'react';
import Header from '../components/Header';

const HeaderOnly = ({ children }) => {
    return (
        <div>
            <Header />
            <div>{children}</div>
        </div>
    );
};

export default HeaderOnly;
