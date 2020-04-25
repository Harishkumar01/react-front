import React from 'react';
import Posts from '../posts/Posts';
import {Link} from 'react-router-dom'

const Home = () => (
    <div>
        <div className="jumbotron" style={{backgroundImage:`url(${require("../Images/stadium.jpg")})`,height:"300px",backgroundSize: "100%"}}>
        </div>
        <div className="container">
        <h1 style={{fontFamily: "Italic"}}>Beyond the Pavilion</h1>
        <br />
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