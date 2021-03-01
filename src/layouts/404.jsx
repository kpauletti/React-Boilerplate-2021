import React from 'react';

const NotFound = props => {

    const goHome = () => props.history.push('/')

    return (
        <div>
            <div>404 Page not Found</div>
            <button onClick={goHome}>Go Home</button>
        </div>
    )
}

export default NotFound