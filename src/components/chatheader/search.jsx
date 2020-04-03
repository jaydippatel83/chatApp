import React, { Component } from 'react';
import './chatheader.style.css';
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
                                 x.user.toLowerCase().includes(this.state.search)).map((x) => {
                                    return <div key={x.id} onClick={() => getIdFromLocal(x.id)}>
                                        {/* <img src={x.imageUrl} style={{ width: '50px', height: '50px' }} />
                                        <p>{x.user}</p> */}
                                         
                                    </div>
                                })
                        }}
                </Query>
            </div>
        );
    }
}

export default Search;