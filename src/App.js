import React from 'react';
import logo from './logo.svg';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import User from './components/userlist/user';
import ChatBox from './components/chatbox/chatbox';
import ApolloClient, { InMemoryCache } from 'apollo-boost';
import { ApolloProvider } from 'react-apollo';
import UserTitle from './components/chatheader/usertitle';
import Search from './components/chatheader/search';
import AddUser from './components/userlist/adduser';
import Footer from './components/footer/footer';
import {  Switch, Route } from "react-router-dom";
 

const client = new ApolloClient({
  // uri: '/graphql'
  uri: 'http://localhost:4000/graphql',
  cache: new InMemoryCache(),
});

 

function App() {

  return (
    <ApolloProvider client={client}>

      <Switch>
        <Route path="/chat" component={ChatBox} />
        <Route path="/adduser" component={AddUser} />
        <Route path="/user" component={User} />
      </Switch>

      <div id="chat-container">
        <div className="container-fluid bg-primary box-shadow">
          <div className="row">
            <div className="col d-flex justify-content-start">
              <img className="App-logo" src={logo} style={{ width: '80px', height: '80px' }} />
              <h2 className="pt-3 pb-3 pr-3 text-light">ChatApp</h2>
            </div>
          </div>
        </div>
        <div className="container-fluid">
          <div className="row height-100">
            <div className="col-3 p-0">
              <Search />
              <User />
              {/* <AddUser/> */}
            </div>
            <div className="col-9 p-0">
              <UserTitle />
              <ChatBox />
              {/* <MsgBox/> */}
            </div>
          </div>
        </div>
        <Footer />
      </div>
    </ApolloProvider >
  );
}

export default App;
