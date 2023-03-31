# Demo project for starting with graphql in nodejs with express using typescript
## Steps to recreate this project
1. Create a new project
```bash
mkdir graphql-demo
cd graphql-demo
npm init -y
```
2. Install dependencies
```bash
npm i -D typescript @types/node ts-node-dev nodemon rimraf
npm i @apollo/server graphql express cors dotenv 
npx tsc --init
```
3. change the tsconfig.json to 
```json
{
  "compilerOptions": {
    "rootDirs": ["src"],
    "outDir": "dist",
    "lib": ["es2020"],
    "target": "es2020",
    "module": "esnext",
    "moduleResolution": "node",
    "esModuleInterop": true,
    "types": ["node"]
  },
  "ts-node": {
    "esm": true,
    "experimentalSpecifierResolution": "node"
  },
  "include": ["src/**/*.ts", "src/resolvers"],
  "exclude": ["node_modules"]
}
```
4. Create new file called nodemon.json and add the following code
```json
{
  "watch": ["src"],
  "ext": "js,json,ts",
  "ignore": ["node_modules/**/*"],
    "exec": "npx ts-node ./src/server.ts"
}
```
5. Add scripts to package.json
```json
"dev": "nodemon src/server.ts",
"build": "rimraf ./build && tsc",
```
6. Create a new file `src/server.ts` and add the following code
```typescript
import { ApolloServer } from '@apollo/server';
import { startStandaloneServer } from '@apollo/server/standalone';
import typeDefs from './graphql_schemas';
import Mutation from './resolvers/mutation';
import Query from './resolvers/query';
import Book from './resolvers/book';
import Category from './resolvers/category';
import { books, categories, ratings } from './data';
const resolvers = {
};

const server = new ApolloServer({
  typeDefs,
  resolvers: {
    Query,
    Book,
    Category,
    Mutation,
  },
});

const { url } = await startStandaloneServer(server, {
  listen: { port: 4000 },
  context: async() => ({
    books, categories, ratings
  }),
});

console.log(`🚀  Server ready at: ${url}`);
```
7. Add the folloing line to package.json
```json
  "type": "module",
```
8. Create a new file `src/graphql_schemas.ts` and add the type definitions for Book, Category and Query
9. Create a resolver folder and add the following files: `book.ts`, `category.ts`, `mutation.ts`, `query.ts`
10. Add a new file: `data.ts` and add an array of books and categories.
11. Run the project
```bash
npm run dev
```
9. Open the browser and go to `http://localhost:4000/graphql`

## References
- [Video](https://www.youtube.com/watch?v=qux4-yWeZvo&t=239s&ab_channel=LaithAcademy)
- [GraphQL](https://graphql.org/)
- [Express](https://expressjs.com/)

## Queries to try out in the sandbox

### Get all books
```graphql
query GetAll {
  books{
    id
    title
    author
    rating_average
    ratings {
      title
      value
    }
    category {
      name
      id
      books {
        title
        category {
          name
        }
      }
    }
  }
}
```
### Get book by id
```graphql
query GetBook($id: ID!) {
  book(id:$id){
    title
    id
    author
    category {
      name
      id
    }
  }
}
```
And send variables
```json
{
  "id": "1"
}
```

### Create new book
```graphql
mutation CreateBook($input: BookInput!) {
  createBook(input: $input) {
    id
    author
    title
    category {
      id
    }
  }
}
```
And send variables
```json
{
  "input": {
    "title": "The Lord of the Rings",
    "author": "J.R.R. Tolkien",
    "category_id": "1"
  }
}
```

### Delete book by id
```graphql
mutation DeleteBook($id: ID!) {
  deleteBook(id: $id)
}
```
And send variables
```json
{
  "id": "1"
}
```

### Update book by id
```graphql
mutation UpdateBook($updateBookId: ID!, $input: BookInput!) {
  updateBook(id: $updateBookId, input: $input) {
    title
    id
  }
}
```
And send variables
```json
{
  "updateBookId": "1",
  "input": {
    "title": "The Lord of the Rings Volume 2",
    // "author": "J.R.R. Tolkien",
    "category_id": "1"
  }
}
```

### Get all categories
```graphql
query GetAllCategories {
  categories {
    id
    name
    books {
      title
      author
    }
  }
}
```

### Get category by id
```graphql
query GetCategory($id: ID!) {
  category(id: $id) {
    id
    name
    books {
      title
      author
    }
  }
}
```
And send variables
```json
{
  "id": "1"
}
```

### Create rating
```graphql
mutation CreateRating($ratingInput: RatingInput!){
  createRating(input: $ratingInput) {
    id
    title
    value
    description
    book {
      title
    }
  }

}
```
And send variables
```json
{
  "ratingInput": {
    "title": "Good",
    "value": 5,
    "description": "This book is good",
    "book_id": "1"
  }
}
```

### Get all ratings
```graphql
query GetRatings {
  books {
    title
    ratings {
      value
    }
  }
}
```

