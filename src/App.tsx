import { Component } from 'react';
import { ApolloProvider } from '@apollo/client';

import { Routes } from './routes/index';
import { client } from './services/api';

class App extends Component {
  render() {
    return (
      <ApolloProvider client={client}>
        <Routes />
      </ApolloProvider>
    );
  }
}

export default App;
