import React, { Component } from 'react';
import SendIcon from '@material-ui/icons/Send';
import AttachFileIcon from '@material-ui/icons/AttachFile';
import gql from 'graphql-tag';
import { Mutation } from "react-apollo";
import './chatbox.style.css';


class MsgBox extends Component {
    state = {
        text: ''
    };
    render() {
        const handleChange = (e) => {
            this.setState({ text: e.target.value });
        }
        const ADD_TEXT = gql`
            mutation addMsg($input:msginput)
            {
                addMsg(input:$input){ 
                     messageText
                     {
                     pid
                     message
                     date 
                     }
                 }
                } 
            `

        return (
            <div className="container-fluid" >
                <div className="row">
                    <Mutation mutation={ADD_TEXT} >
                        {
                            (addMsg) => {
                                return <div className="col-12 bottom-msgbox d-flex justify-content-between">
                                    <div className="mr-2 pt-3"><AttachFileIcon style={{ width: '2rem', height: '2.8rem' }} /></div>
                                    <div className="input-group pb-3 pt-3">
                                        <input
                                            value={this.state.text}
                                            onChange={handleChange}
                                            onKeyUp={(e) => {
                                                return e.keyCode === 13 ? addMsg({
                                                    variables: {
                                                        input: {
                                                            pid: parseInt(localStorage.getItem("user")),
                                                            message: this.state.text,
                                                            date: "3 April"
                                                        }
                                                    }
                                                }, window.location.reload()) : null
                                            }}
                                            type="text" className="form-control "
                                            placeholder="Type a Message" />
                                        <div className="input-group-append">
                                            <span className="btn btn-primary" id="basic-addon2">Send <SendIcon /></span>
                                        </div>

                                    </div>
                                </div>

                            }
                        }
                    </Mutation>
                </div>
            </div>


        )
    }
}
export default MsgBox;