const typeDefs = `#graphql
  # Comments in GraphQL strings (such as this one) start with the hash (#) symbol.

  # This "Book" type defines the queryable fields for every book in our data source.
  type Book {
    id: ID!
    title: String!
    author: String!
    url: String
    description: String
    category: Category # This is a relationship field (Many to One)
    ratings: [Rating!]! # This is a relationship field (One to Many)
    rating_average: Float
  }

  type Category {
    id: ID!
    name: String!
    books: [Book!]!
  }
  
  type Rating {
    id: ID!
    value: Int!
    title: String!
    description: String!
    book: Book!
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
    createRating(input: RatingInput!): Rating
    deleteBook(id: ID!): Boolean
    updateBook(id: ID!, input: BookInput!): Book
  }
  
  input BookInput {
    title: String!
    author: String
    url: String
    description: String
    categoryId: ID
  }

  input RatingInput {
    value: Int!
    title: String!
    description: String!
    bookId: ID!
    }

`;

export default typeDefs;