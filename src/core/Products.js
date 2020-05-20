import React from 'react';

const Products = () => (
    <div>
        <div className="jumbotron" style={{backgroundImage:`url(${require("../Images/stadium.jpg")})`,backgroundSize: "100%"}}>
           
        </div>
        <div className = "container">
        <h1 style={{textAlign: "center"}}  >Team BeyondthePavilion</h1>
            <hr />
            <br />
            <h5 style={{fontFamily: "Italic"}}>Our products will be rolled out soon...stay tuned</h5>
        </div>
    </div>
);
export default Products;