import React , {Component} from 'react';
import {Redirect,Link} from 'react-router-dom';
import {signin,authenticate} from "../auth";
//import SocialLogin from "./SocialLogin"

class Signin extends Component {
    constructor() {
        super()
        this.state = {
            email:"",
            password:"",
            error:"",
            redirectToRefer: false,
            loading: false
        }
    }
    //changing state of variables
    handleChange = (name) => (event) => {
        this.setState({error: ""})
        this.setState({[name]: event.target.value});
    }

    

    clickSubmit = event => {
        event.preventDefault()
        this.setState({loading: true})
        const {email,password} = this.state;
        const user = {
            email,
            password
        };
        //console.log(user)
        signin(user)
        .then(data => {
            if(data.error) { 
                this.setState({error: data.error, loading: false})
            }
            else
            {
                //authenticate
                //redirect
                authenticate(data,()=> {
                    this.setState({redirectToRefer: true})
                });
            }
        })

    }


    signinForm = (email, password) => (
                <form>
                    <div className="form-group">
                        <label className="text-muted">Email</label>
                        <input onChange={this.handleChange("email")} type ="email" className="form-control" value={email}/>
                    </div>
                    <div className="form-group">
                        <label className="text-muted">Password</label>
                        <input onChange={this.handleChange("password")} type ="password" className="form-control" value={password}/>
                    </div>
                    <button onClick = {this.clickSubmit} className = "btn btn-raised btn-dark">
                        submit
                    </button>
                </form>
    )

    render() {
        const {email, password,error,redirectToRefer,loading} = this.state

        if(redirectToRefer) {
            return <Redirect to="/"/>
        }
        return(
            <div className = "container">

                <h2 className = "mt-5 mb-5">Sign In</h2>

                <div className="alert alert-danger" style={{ display: error ? "" : "none" }}>
                    {error}
                </div>

                {loading ? <div className = "jumbotron text-center">
                    <h2>Loading...</h2>
                </div> : ""}

                {this.signinForm(email, password)}
                <p>
                    <Link
                        to="/forgot-password"
                        className="btn btn-raised btn-danger"
                    >
                        {" "}
                        Forgot Password
                    </Link>
                </p>
            </div>
        );
    }
}

export default Signin;