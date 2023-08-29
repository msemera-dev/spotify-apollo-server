import { ApolloServer } from '@apollo/server';
import { startStandaloneServer } from '@apollo/server/standalone';
import { songs } from './data/songs.js';
import { playlists } from './data/playlists.js';

// A schema is a collection of type definitions (hence "typeDefs")
// that together define the "shape" of queries that are executed against
// your data.
const typeDefs = `#graphql
  type Songs {
    title: String
    singer: Singer
    genre: String
  }

  type Singer {
    firstName: String!
    lastName: String!
    address: Address
  }

  type Address {
    city: String
    province: String
    country: String
  }

  type Playlists {
    title: String!
    description: String
    songs: [Songs]
  }

  type Query {
    songs: [Songs!]
    playlists: [Playlists]
  }
`;



// Resolvers define how to fetch the types defined in your schema.
// This resolver retrieves books from the "books" array above.
const resolvers = {
    Query: {
        songs: () => songs,
        playlists: () => playlists
    },
};

// The ApolloServer constructor requires two parameters: your schema
// definition and your set of resolvers.
const server = new ApolloServer({
    typeDefs,
    resolvers,
});

// Passing an ApolloServer instance to the `startStandaloneServer` function:
//  1. creates an Express app
//  2. installs your ApolloServer instance as middleware
//  3. prepares your app to handle incoming requests
const { url } = await startStandaloneServer(server, {
    listen: { port: 4000 },
});

console.log(`🚀  Server ready at: ${url}`);