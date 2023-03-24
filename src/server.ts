import { ApolloServer } from '@apollo/server';
import { startStandaloneServer } from '@apollo/server/standalone';

// A schema is a collection of type definitions (hence "typeDefs")
// that together define the "shape" of queries that are executed against
// your data.
const typeDefs = `#graphql
  # Comments in GraphQL strings (such as this one) start with the hash (#) symbol.

  # This "Book" type defines the queryable fields for every book in our data source.
  type Book {
    id: ID!
    title: String!
    author: String!
    categoryId: Int!
  }

  type Category {
    id: ID!
    name: String!
    books: [Book!]!
  }

  # The "Query" type is special: it lists all of the available queries that
  # clients can execute, along with the return type for each. In this
  # case, the "books" query returns an array of zero or more Books (defined above).
  # The "books" query accepts an optional "author" argument of type String. And returns a list always (even if it's empty). Never null. And content will allways be a Book object or empty. never null.
  type Query {
    books: [Book!]!
    categories: [Category!]!
    book(id: ID): Book
    category(id: ID): Category
  }

  type Mutation {
    createBook(input: BookInput!): Book
    deleteBook(id: ID!): Boolean
    updateBook(id: ID!, input: BookInput!): Book
  }
  
  input BookInput {
    title: String!
    author: String
  }
`;

const books = [
  {
    id: 1,
    title: 'The Awakening',
    author: 'Kate Chopin',
    categoryId: 1,
  },
  {
    id: 2,
    title: 'City of Glass and other',
    author: 'Paul Auster',
    categoryId: 1,
  },{
    id: 3,
    title: 'Lord of the Rings',
    author: 'J.R.R. Tolkien',
    categoryId: 2,
  }
];

const categories = [
  {
    id: 1,
    name: 'Fantasy',
  },
  {
    id: 2,
    name: 'Science Fiction',
  },
  {
    id: 3,
    name: 'Horror',
  },
];

// Resolvers define how to fetch the types defined in your schema.
// This resolver retrieves books from the "books" array above.
const resolvers = {
  Query: {
    books: () => books,
    categories: () => categories,
    book: (_parent, {id}) => {console.log('ID: ',id);const b = books.find((book) => book.id === parseInt(id));console.log(b);return b;},
    category: (_parent, {id}) => categories.find((category) => category.id === parseInt(id)),
  },
  // Resolver for the Category.books field
  Category: {
    books: (parent) => books.filter((book) => book.categoryId === parent.id),
  },
  Mutation: {
    createBook: (parent, { input }, context) => {
      const newBook = {
        id: books.length + 1,
        title: input.title,
        author: input.author,
        categoryId: input.categoryId,
      };
      books.push(newBook);
      return newBook;
    },
    deleteBook: (parent, { id }, context) => {
      const index = books.findIndex(person => person.id === parseInt(id));
      if (index === -1) {
        return false; // person not found
      }
      books.splice(index, 1);
      return true; // deletion successful
    },
    updateBook: (parent, { id, input }, context) => {
      const index = books.findIndex(person => person.id === parseInt(id));
      if (index === -1) {
        return null; // person not found
      }
      const book = books[index];
      const updatedBook = { ...book, ...input };
      books[index] = updatedBook;
      return updatedBook;
    }
  }
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
