import React, { Component } from 'react';
import GoogleLogin from 'react-google-login';

class SocialLogin extends Component {
    responseGoogle = response => {
     console.log('response', response)
    }

    responseGoogl = response => {
        console.log('response fail', response)
    }

    render() {

        return (
            <div className="container">
                <GoogleLogin
                    clientId="870763965888-udbk80hmsc9hej0j1f04jg37mt9ntd41.apps.googleusercontent.com"
                    buttonText="Login with Google"
                    onSuccess={this.responseGoogle}
                    onFailure={this.responseGoogl}
                />
            </div>
        );
    }
}

export default SocialLogin;