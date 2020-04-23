import React from 'react';
import Posts from '../posts/Posts';
import {Link} from 'react-router-dom';
import homesta from '../Images/homsta.jpg'

const Home = () => (
    <div>
        <div className="jumbotron bg-muted text-body">
            <h2>Welcome</h2>
            <img src= {homesta} />
            <p className = "lead">Hello Cricket Freaks</p>
        </div>
        <div className="container">
        <Link className="btn btn-raised btn-info mr-5" to={`/post/create`}>
            Create Post
        </Link>
        </div>
        <div className="container">
            <Posts />
        </div>
    </div>
);
export default Home;