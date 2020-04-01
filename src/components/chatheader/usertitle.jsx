import React, { Component } from 'react';
import './chatheader.style.css';

class UserTitle extends Component {
  
render() {
    const user = window.localStorage.getItem('user'); 
    return (
        <div className=" box-shadow" id="chat-title">
            {user}
        </div>
    );
}
}

export default UserTitle;