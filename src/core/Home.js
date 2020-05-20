import React from 'react';
import Posts from '../posts/Posts';
import {Link} from 'react-router-dom'

const Home = () => (
    <div>
        <div className="jumbotron" style={{backgroundImage:`url(${require("../Images/stadium.jpg")})`,backgroundSize: "100%"}}>
        </div>
        <div className="container">
        <h1 style={{fontFamily: "Italic"}}>Beyond the Pavilion</h1>
        <br />
        <h1 style={{textAlign: "center"}} >
        <Link className="btn btn-raised btn-info mr-5" to={`/post/create`}>
            Create Post
        </Link>
        <Link className="btn btn-raised btn-dark mr-5" to={`/products`}>
            Products
        </Link>
        </h1>
        </div>
        <div className="container">
            <Posts />
        </div>
    </div>
);
export default Home;