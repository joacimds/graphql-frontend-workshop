import { ApolloClient, ApolloProvider, InMemoryCache } from '@apollo/client';
import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import './index.css';

const client = new ApolloClient({
	uri: 'https://public3b47822a17c9dda6.stepzen.net/api/newsapp/__graphql',
	cache: new InMemoryCache()
  })
  
  const root = ReactDOM.createRoot(document.getElementById('root'));
  root.render(
	  <ApolloProvider client={client}>
		  <App />
	  </ApolloProvider>
  );