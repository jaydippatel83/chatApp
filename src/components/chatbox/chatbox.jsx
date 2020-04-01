import React, { Component, Fragment } from 'react';
import { Query } from 'react-apollo';
import gql from 'graphql-tag';
import SendIcon from '@material-ui/icons/Send';
import AttachFileIcon from '@material-ui/icons/AttachFile';
import UserChat from '../chat/userchat';


const USERS_QUERY = gql`
    query data{ 
            chatMsgs{
              id,
              user,
              imageUrl,
              messageText,
              createdAt
            } 
    }
`;

const ChatBox = () => {
    const user = window.localStorage.getItem('user');

    return (
        <Query query={USERS_QUERY}   >
            {
                ({ loading, error, data }) => {
                    if (loading) return <h4>Loading...</h4>;
                    if (error) console.log(error);
                    return <Fragment>
                        <div className="container-fluid chatbox">
                            <div className="row pt-4 height-100">
                                {
                                    data.chatMsgs.map((chat, index) => (
                                        <div className="col-12">
                                            <p className="msg-text"> {chat.messageText}</p>
                                            <UserChat />
                                        </div>
                                    ))
                                }
                            </div>
                        </div>
                    </Fragment>
                }}
        </Query>
    )
}

export default ChatBox;