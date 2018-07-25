import React from 'react';


const Home = () => {
    const clicker = () => {
        console.log('you clicked me!');
    };

    return (
        <div>
            <div>Welcome to Milner.io!</div>
            <button onClick={clicker}>Press Me!</button>
        </div>
    );
};

export default Home;