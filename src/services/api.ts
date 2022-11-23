import { ApolloClient, InMemoryCache } from '@apollo/client';

let apiObject = {
  cache: new InMemoryCache(),
  uri: '',
};

export const apiUri = (switchName: string) => {
  switch (switchName) {
    case 'Leticia':
      return localStorage.setItem(
        'api',
        JSON.stringify({
          uri: 'https://api-carro-graphql.herokuapp.com/graphql',
        }),
      );
    case 'Ivan':
      return localStorage.setItem(
        'api',
        JSON.stringify({
          uri: 'https://igraphql-api-carros.herokuapp.com/graphql',
        }),
      );
    case 'Salatiel':
      return localStorage.setItem(
        'api',
        JSON.stringify({
          uri: 'https://igraphql-api-carros.herokuapp.com/graphql',
        }),
      );
    case 'Juan':
      return localStorage.setItem(
        'api',
        JSON.stringify({
          uri: 'https://apicarro-phoenix.herokuapp.com/graphql',
        }),
      );
    case 'Larissa':
      return localStorage.setItem(
        'api',
        JSON.stringify({
          uri: 'https://api-graphql-trainee-larissa.herokuapp.com/graphql',
        }),
      );
    default:
      return localStorage.setItem(
        'api',
        JSON.stringify({
          uri: 'https://igraphql-api-carros.herokuapp.com/graphql',
        }),
      );
  }
};

const apiJSON = localStorage.getItem('api');
if(apiJSON)

  apiObject = {
    cache: new InMemoryCache(),
    ...JSON.parse(apiJSON),
  };

export const client = new ApolloClient(apiObject);