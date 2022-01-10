import React from 'react';
import { ApolloClient, InMemoryCache, ApolloProvider } from '@apollo/client';

import './App.css';
import CreateUser from './Components/CreateUser';
import ListOfUsers from './Components/ListOfUsers';
import UpdatePassword from './Components/UpdatePassword';

const client = new ApolloClient({
  uri: 'http://localhost:3001/graphql',
  cache: new InMemoryCache()
});

function App() {
  
  return (
    <>
      <ApolloProvider client={client}>
        <CreateUser />
        <br/>
        <hr/>
        <br/>
        <ListOfUsers />
        <br/>
        <hr/>
        <br/>
        <UpdatePassword />
      </ApolloProvider>
    </>
  )
}

export default App
