import React, { Component } from 'react';
import './chatheader.style.css';
import '../userlist/user.style.css';
import gql from 'graphql-tag';
import { Query } from 'react-apollo';

class Search extends Component {
    state = {
        search: ''
    }

    render() {
        const handleChange = (e) => {
            this.setState({ search: e.target.value });
        }
        const getIdFromLocal = (uid) => {
            localStorage.setItem("user", uid);
            window.location.reload();
        }

        return (
            <div>
                <div className="box-shadow" id="search-container">
                    <input onChange={handleChange} type="text" placeholder="Search" />
                </div>
                <Query query={
                    gql`{
                        chatMsgs{
                            id
                            user
                            imageUrl
                            messageText{
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
                            return data.chatMsgs.filter(x => this.state.search === '' ||
                                x.user.toLowerCase().includes(this.state.search)).map((x,index) => {
                                    return <div className="bg-dark" key={x.id} onClick={() => getIdFromLocal(x.id)}>
                                        <div   key={index} className="col-12 border-bottom">
                                            <div className="d-flex justify-content-start ">
                                                <img className="m-2 user-img" src={x.imageUrl} />
                                                <div className="user text-light font-weight-bold"  >
                                                    <p className="m-0">{x.user}</p>
                                                    <div className="d-flex justify-content-around">
                                                        <span className="chat-msg">{x.messageText[x.messageText.length - 1].message}</span>
                                                        <span className="date">{x.messageText[x.messageText.length - 1].date}</span>
                                                    </div>
                                                </div>

                                            </div>
                                        </div>

                                    </div>
                                })
                        }}
                </Query>
            </div>
        );
    }
}

export default Search;