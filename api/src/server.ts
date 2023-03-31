import { ApolloServer } from '@apollo/server';
import { expressMiddleware } from '@apollo/server/express4';
// The following 2 imports are for reliable shutdown of the server.
import { ApolloServerPluginDrainHttpServer } from '@apollo/server/plugin/drainHttpServer';
import http from 'http';
// import { startStandaloneServer } from '@apollo/server/standalone';
import body_parser_pkg from 'body-parser'; // import { json } from 'body-parser' gave error.
const { json } = body_parser_pkg;
import express from 'express';
import cors from 'cors';
import typeDefs from './graphql_schemas';
import Mutation from './resolvers/mutation';
import Query from './resolvers/query';
import Category from './resolvers/category';
import Book from './resolvers/book';
import Rating from './resolvers/rating';
import { books, categories, ratings } from './data';
import usersRouter from './routes/users';

const app = express();

interface MyContext {
  books: typeof books;
  categories: typeof categories;
  ratings: typeof ratings;
}


const httpServer = http.createServer(app);
const server = new ApolloServer<MyContext>({
  typeDefs,
  resolvers: {
    Query,
    Book,
    Category,
    Rating,
    Mutation,
  },
  plugins: [ApolloServerPluginDrainHttpServer({ httpServer })],
});
// ApolloServerPluginDrainHttpServer is a plugin that will drain the httpServer when the ApolloServer is stopped. This is useful for ensuring that the server is not kept alive by the Node.js event loop. It is not necessary to use this plugin if we are using a different HTTP server, such as Express or Apollo Standalone Server: https://www.apollographql.com/docs/apollo-server/api/plugin/drain-http-server/.


await server.start();

app.use('/graphql', 
cors<cors.CorsRequest>(),
json(),
expressMiddleware(server, {
  context: async() => ({
    books, categories, ratings
})},
)
);

// top level await is now supported since typescript 3.8
await new Promise<void>((resolve) => httpServer.listen({ port: 4000 }, resolve));
console.log(`🚀 GraphQL Server ready at http://localhost:4000/graphql`);

app.use('/api/users', usersRouter);
console.log(`🚀 Users API ready at http://localhost:4000/api/users`);

app.get('*', function(req, res){
  res.send({ status: 404, message: 'Ressource not found' });
});

// Passing an ApolloServer instance to the `startStandaloneServer` function:
//  1. creates an Express app
//  2. installs your ApolloServer instance as middleware
//  3. prepares your app to handle incoming requests:
// const { url } = await startStandaloneServer(server, {
//   // The `context` option is passed to the `context` method of the underlying
//   // ApolloServer instance.  This allows you to configure the context that
//   // is passed to your resolvers. And thereby access the data in the resolvers, by using the third context parameter.
//   context: async() => ({
//     books, categories, ratings
//   }),
//   // The `listen` option is passed to the `listen` method of the underlying
//   // http server.  This allows you to configure the host and port to listen
//   // on, as well as other options.
//   listen: { port: 4000 },
// });

// console.log(`🚀  Server ready at: ${url}`);
