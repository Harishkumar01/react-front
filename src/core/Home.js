import React from 'react';
import Posts from '../posts/Posts';

const Home = () => (
    <div>
        <div className="jumbotron bg-muted text-body">
            <h2>Hello</h2>
            <p className = "lead">Welcome Cricket Freaks</p>
        </div>
        <div className="container">
            <Posts />
        </div>
    </div>
);
export default Home;