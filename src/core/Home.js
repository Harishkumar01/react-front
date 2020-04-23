import React from 'react';
import Posts from '../posts/Posts';
import {Link} from 'react-router-dom'

const Home = () => (
    <div>
        <div className="jumbotron bg-muted text-body" style={{backgroundImage:`url(${require("../Images/stadium.jpg")})`, width: "100%",backgroundSize: "100%"}}>
            <h2 style = {{color:'white'}}>Welcome</h2>
            
        </div>
        <div className="container">
        <h1 style={{fontFamily: "Italic"}}>Hello Cricket Freaks</h1>
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