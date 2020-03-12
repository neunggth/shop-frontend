import React, { Component } from 'react'
import Profile from './Profile'

export default class Login extends Component {
     state ={
            isLogin: false
    }

    login = () =>{
        // alert('login');
        this.setState({isLogin:true });

    }
    logout = (id) =>{
        // alert('logout');
        alert(id);
        this.setState({isLogout:false });
        
    }
    render() {
        return (
            <div>
                    {
                        this.state.isLogin  ? ( 
                            <>
                            <Profile/>
                            <button onClick={
                                (e) => this.logout(10, e)
                            }> Logout </button>
                            </>
                        ): (
                            <>
                            <p> Try Bob!!</p>
                            <button onClick={this.login}> Log In </button>
                            </>
                        )
                    }
                    
            </div>
        )
    }
}


