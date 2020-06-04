import React from 'react';
import ReactPlayer from 'react-player';

const Products = () => (
    <div>
        <div className="jumbotron" style={{backgroundImage:`url(${require("../Images/stadium.jpg")})`,backgroundSize: "100%"}}>
           
        </div>
        <div className = "container">
        <h1 style={{textAlign: "center"}}  >Team BeyondthePavilion</h1>
            <hr />
            <br />
            <div>
                <h3 style={{fontFamily: "Italic"}}>Net Practice Session Analyser</h3>
                <br />
                <h5>
                    Boost your game with Videoanalytics!
                </h5>
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

                <iframe src="https://www.linkedin.com/embed/feed/update/urn:li:ugcPost:6658947049247113216" height="826" width="1100" frameborder="0" allowfullscreen="" title="Embedded post"></iframe>
                <div style={{display: 'flex', justifyContent: 'center'}}>
                    <ReactPlayer
                        //url="https://www.youtube.com/watch?v=IkPF5xIJ1qw"
                    />
                </div>
                
            </div>
        </div>
        
    </div>
);
export default Products;