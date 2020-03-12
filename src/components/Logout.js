import React, { Component } from 'react'
import Profile from './Profile'

export default class Logout extends Component {
     state ={
            isLogout: false
    }

    logout = () =>{
        // alert('login');
        this.setState({isLogin:true });
    }
    render() {
        return (
            <div>
                    {
                        this.state.isLogout  ? ( 
                            <Profile/>
                        ): (
                            <>
                            <p> Try Boo!!</p>
                            <button onClick={this.logout}> Logout </button>
                            </>
                        )
                    }
                    
            </div>
        )
    }
}


