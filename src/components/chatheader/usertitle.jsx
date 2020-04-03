import React, { Component, Fragment } from 'react';
import { Query } from 'react-apollo';
import gql from 'graphql-tag';
import './chatheader.style.css';


class UserTitle extends Component {
    render() {
        const user = parseInt(localStorage.getItem("user"));

        return (
            <Query query={gql`{
            chatId(id:${user}){
                id
                user
                imageUrl
                messageText{
                pid
                message
                date
                
                }
            }
        }
        `
            }>
                {
                    ({ loading, error, data }) => {
                        if (loading) return <h4>Loading...</h4>;
                        if (error) console.log(error);
                        console.log(data, "data");
                        return <div className=" box-shadow d-flex justify-content-start" id="chat-title">
                              <img className="title-img" src={data.chatId.imageUrl} />
                              <p className="mt-2 ml-2"> {data.chatId.user}</p>  
                        </div>

                    }}
            </Query>
        )
    }
}
export default UserTitle;