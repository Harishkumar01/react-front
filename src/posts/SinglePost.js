import React , {Component} from 'react';
import {singlePost,remove,like,unlike, comment} from './apiPosts';
import defaultpost from "../Images/defaultpost.jpg";
import {Link,Redirect} from 'react-router-dom';
import {isAuthenticated} from '../auth';
import Comment from './Comment'


class SinglePost extends Component {
    state = {
        post:'',
        redirecttohome: false,
        redirecttosignin: false,
        like:false,
        likes: 0,
        comments: []
    }

    // to check the user whether in likes array or not
    checkLike = (likes) => {
        const userId = isAuthenticated() && isAuthenticated().user._id;
        let match = likes.indexOf(userId) !== -1;
        return match;

    }

    componentDidMount = () => {
        const postId = this.props.match.params.postId
        singlePost(postId).then(data => {
            if(data.error) {
                console.log(data.error)
            } else {
                this.setState({post: data, likes: data.likes.length, like: this.checkLike(data.likes),comments: data.comments})
            }
        })
    }

    updateComments = comments => {
        this.setState({comments})
    }

    liketoggle =() => {
        if(!isAuthenticated()) {
            this.setState({redirecttosignin: true})
            return false
        }
        let callApi = this.state.like ? unlike : like
        const userId = isAuthenticated().user._id
        const postId = this.state.post._id
        const token = isAuthenticated().token
        
        callApi(userId,token,postId).then(data => {
            if(data.error) {
                console.log(data.error)
            } else {
                this.setState({
                    like: !this.state.like,
                    likes: data.likes.length

                })
            }
        })
    }

    deletePost = () => {
        const postId = this.props.match.params.postId
        const token = isAuthenticated().token
        remove(postId,token).then(data => {
            if(data.error) {
                console.log(data.error)
            } else {
                this.setState({redirecttohome: true})
            }
        })

    }

    deleteConfirmed = () => {
        let answer = window.confirm("Are you sure you want to delete this Post?")
        if(answer) {
            this.deletePost()
        }
    }

    renderPost = (post) => {
        const posterId = post.postedBy ? `/user/${post.postedBy._id}` : ""
        const posterName = post.postedBy ? post.postedBy.name : "Unknown"
        const {like,likes} = this.state
        return (
                <div className="card-body">
                    <img src={`${process.env.REACT_APP_API_URL}/post/photo/${post._id}?${new Date().getTime()}`} 
                    alt="post.title" onError={i => i.target.src = `${defaultpost}`}
                    className= "img-thumbnail mb-3"
                    style={{height: "300px",width:"100%", objectFit:"cover"}} 
                    />

                        {like ? (
                            <h3 onClick={this.liketoggle}><i className = "fa fa-thumbs-up text-success bg-dark" style={{padding: '10px',borderRadius: '50%'}}></i> {likes} Like</h3>
                        ) : (
                            <h3 onClick={this.liketoggle}><i className = "fa fa-thumbs-up text-warning bg-dark" style={{padding: '10px',borderRadius: '50%'}}></i> {likes} Like</h3>
                        )}
                        <p className="card-text">{post.body}</p>
                        <br />
                        <p className="font-italic mark">
                            posted by <Link to={`${posterId}`}>{posterName}</Link>{" "}
                            on {new Date(post.created).toDateString()}
                        </p>
                        <div className="d-inline-block">
                            <Link to={`/`} className="btn btn-raised btn-dark btn-sm mr-5">Back to Posts</Link>
                            {isAuthenticated().user && 
                            isAuthenticated().user._id === post.postedBy._id && 
                            (
                            <>
                                <Link to={`/post/edit/${post._id}`} className="btn btn-raised btn-success btn-sm mr-5">Update Post</Link>
                                <button onClick={this.deleteConfirmed} className="btn btn-raised btn-danger">Delete Post</button>
                            </>
                            )
                            }
                        </div>
                </div> 
        )
    }

    render() {

        const {post,redirecttosignin,redirecttohome,comments} = this.state

        if(redirecttohome) {
            return  <Redirect to={`/`}/>
        } else if(redirecttosignin){
            return  <Redirect to={`/signin`}/>
        }


        return (
            <div className = "container">
                <h2 className = "mt-5 mb-5">{post.title}</h2>
                {!post ? <div className = "jumbotron text-center">
                    <h2>Loading...</h2>
                </div> : this.renderPost(post)}
                {this.comments}
                <Comment postId={post._id} comments={comments.reverse()} updateComments={this.updateComments} />
            </div>
        )
    }
}

export default SinglePost;

