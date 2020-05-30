import React from 'react';
import harish from "../Images/harish.jpg";
import ajay from "../Images/ajay.jpeg";
import pai from "../Images/pai.jpeg";
import aki from "../Images/aki.jpeg";
import madhu from "../Images/madhu.jpeg";

const About = () => (
    <div>
        <div className="jumbotron" style={{backgroundImage:`url(${require("../Images/stadium.jpg")})`,backgroundSize: "100%"}}>
           
        </div>
        <div className = "container">
        <h1 style={{textAlign: "center"}}  >Team BeyondthePavilion</h1>
            <hr />
            <h3 style={{backgroundColor: "lightblue"}}>Check out our product... Stay tuned for further interesting updates...</h3>
            <br />
            <h5 style={{fontFamily: "Italic"}}>Cricket is the most popular played game in India. Being passionate about cricket, we have decided to launch a website.</h5>
            <h5 style={{fontFamily: "Italic"}}>The objective of our website is to organize people of similar thougts who are into the world of CRICKET. Everybody can post their views and discuss. We will be also working on our products...</h5>
            <br />
        <div className="row">
        
        <div className="card col-md-3">
                        <img style={{ height:"300px",width:"auto"}} className="img-thumbnail" src={ `${ajay}`}
                        atl="Harish" />
                        <div className="card-body">
                            <h5 className="card-title">Ajay Damodar</h5>
                            <p className="card-text">theajay1799@gmail.com</p>
                            {/*<h4 className="card-title">Data Analyst</h4>*/}
                            
                        </div>
        </div>
        <div className="card col-md-3">
                        <img style={{ height:"300px",width:"auto"}} className="img-thumbnail" src={ `${aki}`}
                        atl="Harish" />
                        <div className="card-body">
                            <h5 className="card-title">Akhilesh R</h5>
                            <p className="card-text">akhilramkee123@gmail.com</p>
                            {/*<h4 className="card-title">Software Developer</h4>*/}
                            
                        </div>
        </div>
        <div className="card col-md-3">
                        <img style={{ height:"300px",width:"auto"}} className="img-thumbnail" src={ `${madhu}`}
                        atl="Harish" />
                        <div className="card-body">
                            <h5 className="card-title">Madhupprasad</h5>
                            <p className="card-text">madhupprasad7@gmail.com</p>
                            {/*<h4 className="card-title">Software Developer</h4>*/}
                            
                        </div>
        </div>
        <div className="card col-md-3">
                        <img style={{ height:"300px",width:"auto"}} className="img-thumbnail" src={ `${harish}`}
                        atl="Harish" />
                        <div className="card-body">
                            <h5 className="card-title">Harish Kumar V</h5>
                            <p className="card-text">harishvijayarajan@gmail.com</p>
                            {/*<h4 className="card-title">Software Developer</h4>*/}
                            
                        </div>
        </div>
        <div className="card col-md-3">
                        <img style={{ height:"300px",width:"auto"}} className="img-thumbnail" src={ `${pai}`}
                        atl="Harish" />
                        <div className="card-body">
                            <h5 className="card-title">Aravind</h5>
                            <p className="card-text">aravindpai23@gmail.com</p>
                            {/*<h4 className="card-title">Data Scientist</h4>*/}
                            
                        </div>
        </div>
        </div>
        </div>
    </div>
);
export default About;