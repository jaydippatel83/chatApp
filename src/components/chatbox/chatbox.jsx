import React, { Component, Fragment } from 'react';
import { Query } from 'react-apollo';
import gql from 'graphql-tag';  
import UserChat from '../chat/userchat';
 
 class ChatBox extends Component {
     render(){
    const user =parseInt(localStorage.getItem("user")); 
    
    return (
        <Query query={gql`{
            chatId(id:${user}){
                id
                imageUrl
                messageText{
                pid
                message
                date
                
                }
            }
        }
        ` 
        }   >
            {
                ({ loading, error, data }) => {
                    if (loading) return <h4>Loading...</h4>;
                    if (error) console.log(error); 
                    return  <div className="container-fluid chatbox">
                            <div className="row pt-4 height-100">
                                 {
                                    data.chatId.messageText.map((chat, index) => ( 
                                        <div key={index} className="col-12">
                                            <p className="msg-text mb-0"> 
                                            {chat.message}
                                            </p>
                                            <p className="date">
                                            {chat.date}
                                            </p>
                                            <UserChat />
                                        </div>
                                       ))
                                }    
                            </div>
                        </div> 
                    
                }}
        </Query>
    )
}
 }
export default ChatBox;