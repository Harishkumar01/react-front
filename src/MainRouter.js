import React from 'react';
import {Route,Switch} from 'react-router-dom';
import Home from './core/Home';
import Menu from './core/Menu';
import Signup from './user/Signup';
import Signin from './user/Signin';
import Profile from './user/Profile';
import Users from './user/Users';
import EditProfile from './user/EditProfile';
import PrivateRoute from './auth/PrivateRoute';
import FindPeople from './user/FindPeople';
import NewPost from './posts/NewPost';
import SinglePost from './posts/SinglePost';
import EditPost from './posts/EditPost';
import ForgotPassword from './user/ForgotPassword';
import ResetPassword from './user/ResetPassword';
import About from './core/About'
import Products from './core/Products'

const MainRouter = () => (
    <div>
        <Menu />
        <Switch>
            <Route exact path="/" component = {Home}></Route>
            <Route exact path="/forgot-password" component = {ForgotPassword}></Route>
            <Route exact path="/reset-password/:resetPasswordToken" component = {ResetPassword}></Route>
            <PrivateRoute exact path="/post/create" component = {NewPost}/>
            <Route exact path="/post/:postId" component = {SinglePost}></Route>
            <PrivateRoute exact path="/post/edit/:postId" component = {EditPost}/>
            <Route exact path="/users" component = {Users}></Route>
            <Route exact path="/signup" component = {Signup}></Route>
            <Route exact path="/signin" component = {Signin}></Route>
            <PrivateRoute exact path="/user/edit/:userId" component = {EditProfile}/>
            <PrivateRoute exact path="/user/:userId" component = {Profile}/>
            <PrivateRoute exact path="/findPeople" component = {FindPeople}/>
            <Route exact path="/about" component = {About}></Route>
            <Route exact path="/products" component = {Products}></Route>
        </Switch>
    </div>
)

export default MainRouter;