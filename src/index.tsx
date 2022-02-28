import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import reportWebVitals from './reportWebVitals';
import './index.css';
import { ThemeProvider } from '@mui/material/styles';
import { mainTheme } from './material-theme';
// import { Provider as ReduxProvider } from 'react-redux';
// import { store } from './redux/store';
import { ApolloClient, InMemoryCache, ApolloProvider, HttpLink, from } from '@apollo/client';
import { onError } from '@apollo/client/link/error';

// Log any GraphQL errors or network error that occurred
const errorLink = onError(({ graphQLErrors, networkError }) => {
  if (graphQLErrors)
    graphQLErrors.forEach(({ message, locations, path }) =>
      console.log(`[GraphQL error]: Message: ${message}, Location: ${locations}, Path: ${path}`)
    );
  if (networkError) console.log(`[Network error]: ${networkError}`);
});

const link = from([errorLink, new HttpLink({ uri: process.env.REACT_APP_BACKEND_URI })]);

const client = new ApolloClient({
  link: link,
  cache: new InMemoryCache(),
});

ReactDOM.render(
  <React.StrictMode>
    {/* <ReduxProvider store={store}> */}
    <ApolloProvider client={client}>
      <ThemeProvider theme={mainTheme}>
        <App />
      </ThemeProvider>
    </ApolloProvider>
    {/* </ReduxProvider> */}
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
