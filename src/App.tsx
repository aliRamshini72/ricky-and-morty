import React from 'react';
import {ApolloProvider} from '@apollo/client';
import Characters from "./components/characters/Characters";
import client from "./gql/client";


function App() {
    return (
        <ApolloProvider client={client}>
            <Characters/>
        </ApolloProvider>
    );
}

export default App;