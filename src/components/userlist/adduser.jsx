import React, { Component } from 'react';
import SendIcon from '@material-ui/icons/Send';
import AddIcon from '@material-ui/icons/Add';
import './user.style.css';

export default class AddUser extends Component {
    render() {
        return (
            <div className="container-fluid pb-4">
                <div className="row">
                    <div className="col-12  bottom-adduser d-flex justify-content-between">
                        <div className="">
                            <AddIcon className="additem-icon" />
                        </div> 
                    </div>
                </div>
            </div>
        )
    }
}