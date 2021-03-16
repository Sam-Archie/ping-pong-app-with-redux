import React from 'react';

const Reset = ({ reset }) => {
    return (
        <div>
            <button onClick={ reset } className="btn btn-danger">Reset</button>
        </div>
    );
};

export default Reset;