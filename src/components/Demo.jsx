import React from 'react';
import { Link } from 'react-router-dom';

const Demo = () => {
    return (
        <div className="demo">
            <h1>Demo</h1>
            <p>This is a demo component</p>
            <Link to="/dashboard/academics">Go to Academics</Link>
        </div>
    );
};

export default Demo;
