import React from 'react';
import Posts from '../posts/Posts';
import {Link} from 'react-router-dom'

const Home = () => (
    <div>
        <div className="jumbotron" style={{backgroundImage:`url(${require("../Images/stadium.jpg")})`,backgroundSize: "100%"}}>
        <h1 style={{fontFamily: "Italic",color: "#ffffff"}}>
            Beyond the Pavilion
        </h1>
        </div>
        <div className="container">
        <br />
        <div className="alert alert-info">
                Check out our <Link to ="/products">Products</Link>
        </div>
        <div className="alert alert-dark">
                Create your own <Link className="dark" to ="/post/create">Posts</Link>
        </div>
        
        </div>
        <div className="container">
            <Posts />
        </div>
    </div>
);
export default Home;