import React from 'react';
import harish from "../Images/harish.jpg";
import ajay from "../Images/ajay.jpeg";
import pai from "../Images/pai.jpeg";
const About = () => (
    <div>
        <div className="jumbotron bg-muted text-body">
            <h1>Welcome</h1>
            <h2 className = "lead">Our products will be rolled out soon...stay tuned</h2>
            <h4>Cricket is the most popular played game in India. Being passionate about cricket, we have decided to launch a website.</h4>
            <h4>The objective of our website is to organize people of similar thougts who are into the world of CRICKET. Everybody can post their views and discuss. We will be also working on our products...</h4>
        </div>
        <div className = "container">
            <div className="row">
        <div className="card col-md-4">
                        <img style={{ height:"300px",width:"auto"}} className="img-thumbnail" src={ `${pai}`}
                        atl="Harish" />
                        <div className="card-body">
                            <h5 className="card-title">Aravind</h5>
                            <p className="card-text">aravindpai23@gmail.com</p>
                            {/*<h4 className="card-title">Data Scientist</h4>*/}
                            
                        </div>
        </div>
        <div className="card col-md-4">
                        <img style={{ height:"300px",width:"auto"}} className="img-thumbnail" src={ `${ajay}`}
                        atl="Harish" />
                        <div className="card-body">
                            <h5 className="card-title">Ajay Damodar</h5>
                            <p className="card-text">theajay1799@gmail.com</p>
                            {/*<h4 className="card-title">Data Analyst</h4>*/}
                            
                        </div>
        </div>
        <div className="card col-md-4">
                        <img style={{ height:"300px",width:"auto"}} className="img-thumbnail" src={ `${harish}`}
                        atl="Harish" />
                        <div className="card-body">
                            <h5 className="card-title">Harish Kumar V</h5>
                            <p className="card-text">harishvijayarajan@gmail.com</p>
                            {/*<h4 className="card-title">Software Developer</h4>*/}
                            
                        </div>
        </div>
        </div>
        </div>
    </div>
);
export default About;