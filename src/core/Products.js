import React from 'react';
import ReactPlayer from 'react-player';
import auction from "../Images/Auction_Image_2.jpeg";

const Products = () => (
    <div>
        <div className="jumbotron" style={{backgroundImage:`url(${require("../Images/stadium.jpg")})`,backgroundSize: "100%"}}>
           
        </div>
        <div className = "container">
        <h1 style={{textAlign: "center"}}  >Team BeyondthePavilion</h1>
            <hr />
            <br />

        <div className="row">
        
        <div className="card col-md-6 border border-dark">
            <div>
                <h3 >Net Practice Session Analyser</h3>
                <br />
                <h4 style={{fontFamily: "Italic", color: "#ff9900"}}>
                    Boost your game with Videoanalytics!
                </h4>
                <br />
                <h5>
                Cricket is generally practiced in nets. Analyzing the net practice sessions is key in improving the performance of the game.
                Wouldn't it be great to build a system that analyzes the net practice videos and gives you instant feedback on the session?
                Built a net assistant system using the concepts of Computervision. The system accepts the net practice video as an input and identifies the different types of shots played in a session.
                </h5>
                <br />
                <h5>
                This is just the beginning of the project. The best is yet to come. Credits to the Strength Speed Agility cricket academy for the net practice video
                </h5>
                <br ></br>
                <iframe src="https://www.linkedin.com/embed/feed/update/urn:li:ugcPost:6658947049247113216?compact=1" 
                        height="284" width="390" frameborder="0" allowfullscreen="" title="Embedded post">
                </iframe>
                
                {/*<div style={{display: 'flex', justifyContent: 'center'}}>
                    <ReactPlayer
                        url="https://www.youtube.com/watch?v=IkPF5xIJ1qw"
                    />
                </div>*/}
                
            </div>   
        </div>
        <div className="card col-md-6 border border-dark">
            <div>
                <img style={{ height:"750px",width:"750px"}} className="img-thumbnail" src={ `${auction}`}
                    atl="Product : #2" />
            </div>   
        </div>
        </div>
        </div>
    </div>
        
);
export default Products;