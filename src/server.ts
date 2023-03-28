import { ApolloServer } from '@apollo/server';
import { startStandaloneServer } from '@apollo/server/standalone';
import typeDefs from './graphql_schemas';
import Mutation from './resolvers/mutation';
import Query from './resolvers/query';
import Category from './resolvers/category';
import Book from './resolvers/book';
import Rating from './resolvers/rating';
import { books, categories, ratings } from './data';
// A schema is a collection of type definitions (hence "typeDefs")
// that together define the "shape" of queries that are executed against
// your data.

// Resolvers define how to fetch the types defined in your schema.
// This resolver retrieves books from the "books" array above.
const resolvers = {
};

interface MyContext {
  books: typeof books;
  categories: typeof categories;
  ratings: typeof ratings;
}
// The ApolloServer constructor requires two parameters: your schema
// definition and your set of resolvers.
const server = new ApolloServer<MyContext>({
  typeDefs,
  resolvers: {
    Query,
    Book,
    Category,
    Rating,
    Mutation,
  }
});

// Passing an ApolloServer instance to the `startStandaloneServer` function:
//  1. creates an Express app
//  2. installs your ApolloServer instance as middleware
//  3. prepares your app to handle incoming requests
const { url } = await startStandaloneServer(server, {
  // The `context` option is passed to the `context` method of the underlying
  // ApolloServer instance.  This allows you to configure the context that
  // is passed to your resolvers. And thereby access the data in the resolvers, by using the third context parameter.
  context: async() => ({
    books, categories, ratings
  }),
  // The `listen` option is passed to the `listen` method of the underlying
  // http server.  This allows you to configure the host and port to listen
  // on, as well as other options.
  listen: { port: 4000 },
});

console.log(`🚀  Server ready at: ${url}`);
