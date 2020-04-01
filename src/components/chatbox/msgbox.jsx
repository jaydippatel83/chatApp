import React, { Component } from 'react';
import SendIcon from '@material-ui/icons/Send';
import AttachFileIcon from '@material-ui/icons/AttachFile';
import './chatbox.style.css';

export default class MsgBox extends Component {
    render() {
        return (
            <div className="container-fluid">
                <div className="row">
                    <div className="col-12 bottom-msgbox d-flex justify-content-between">
                        <div className="mr-2 pt-3"><AttachFileIcon style={{ width: '2rem', height: '2.8rem' }} /></div>
                        <div className="input-group pb-3 pt-3">
                            <input type="text" className="form-control " placeholder="Type a Message" />
                            <div className="input-group-append">
                                <span className="btn btn-primary" id="basic-addon2">Send <SendIcon /></span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}