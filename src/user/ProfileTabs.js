import React, { Component } from 'react';
import {Link} from 'react-router-dom';
import defaultprofile from "../Images/avatar.png";


class ProfileTabs extends Component {
    render() {
        const {following,followers,posts} = this.props
        return ( 
            <div>
                <div className="row">
                    <div className="col-md-4">
                        <h3 className="text-primary">{followers.length} followers</h3>
                        <hr />
                        {followers.map((person, i) => (  
                            <div key={i}>
                                    <div>
                                        <Link to={`/user/${person._id}`}>
                                            <img  style={{borderRadius:"50%",border: "1px solid black"}} 
                                            className = "float-left mr-2" height="30px" width="30px"
                                            src={`${process.env.REACT_APP_API_URL}/user/photo/${person._id}?${new Date().getTime()}`} 
                                            onError={i => (i.target.src = `${defaultprofile}`)} alt={person.name} />
                                            <div>
                                                <p className="lead">{person.name}</p>
                                            </div>
                                        </Link>
                                    </div>
                            </div>
                        
                    ))}
                    </div>
                    <div className="col-md-4">
                        <h3 className="text-primary">following {following.length}</h3>
                        <hr />
                        {following.map((person, i) => (  
                            <div key={i}>
                                    <div>
                                        <Link to={`/user/${person._id}`}>
                                            <img style={{borderRadius:"50%",border: "1px solid black"}} className = "float-left mr-2" height="30px" width="30px"  src={`${process.env.REACT_APP_API_URL}/user/photo/${person._id}?${new Date().getTime()}`} onError={i => (i.target.src = `${defaultprofile}`)} alt={person.name} />
                                            <div>
                                                <p className="lead">{person.name}</p>
                                            </div>
                                        </Link>
                                    </div>
                            </div>
                        
                    ))}
                    </div>
                    <div className="col-md-4">
                        <h3 className="text-primary">{posts.length} Posts</h3>
                        <hr />
                        {posts.map((post, i) => (  
                            <div key={i}>
                                    <div>
                                        <Link to={`/post/${post._id}`}>
                                            <div>
                                                <p className="lead">{post.title}</p>
                                            </div>
                                        </Link>
                                    </div>
                            </div>
                         ))}
                    </div>
                </div>
            </div>
        );
    }

}

export default ProfileTabs

