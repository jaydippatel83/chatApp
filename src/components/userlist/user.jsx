import React, { Fragment, Component } from 'react';
import { Query } from 'react-apollo';
import gql from 'graphql-tag';
import './user.style.css'; 

const USERS_QUERY = gql`
    query data { 
            chatMsgs{
              id,
              user,
              imageUrl,
              messageText{
                  message
                  date
              }
              createdAt
            } 
    }
`;

class User extends Component { 
    render() {
        const UserName = (chatUser) => { 
            window.localStorage.setItem('user', chatUser); 
            window.location.reload(); 
        }
        return (
            <Fragment>
                <Query query={USERS_QUERY}   >
                    {
                        ({ loading, error, data }) => {
                            if (loading) return <h4>Loading...</h4>;
                            if (error) console.log(error); 
                            return <Fragment>
                                <div className="container-fluid bg-dark"> 
                                    <div className="row">
                                        {
                                            data.chatMsgs.map((chat, index) => (
                                                <div onClick={() => UserName(chat.id)} key={index} className="col-12 border-bottom">
                                                    <div className="d-flex justify-content-start ">
                                                        <img className="m-2 user-img" src={chat.imageUrl} />
                                                        <div className="user text-light font-weight-bold"  >
                                                            <p className="m-0">{chat.user}</p>
                                                            <div className="d-flex justify-content-around">
                                                                <span className="chat-msg">{chat.messageText[chat.messageText.length-1].message}</span>
                                                                <span className="date">{chat.messageText[chat.messageText.length-1].date}</span>
                                                            </div>
                                                        </div>

                                                    </div>
                                                </div> 
                                            ))
                                        } 
                                    </div>
                                </div> 
                            </Fragment>
                        }
                    }
                </Query>
            </Fragment>
        )
    }

}
export default User;