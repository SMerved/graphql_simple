# Demo project for starting with graphql in nodejs with express using typescript
## Steps to recreate this project
1. Create a new project
```bash
mkdir graphql-demo
cd graphql-demo
npm init -y
npx tsc --init
```
2. Install dependencies
```bash
npm i -D typescript @types/node ts-node-dev nodemon rimraf
npm i @apollo/server graphql express cors dotenv 
```
3. Create new file called nodemon.json and add the following code
```json
{
  "watch": ["src"],
  "ext": "js,json,ts",
  "ignore": ["node_modules/**/*"],
    "exec": "npx ts-node ./src/server.ts"
}
```
4. Add scripts to package.json
```json
"dev": "nodemon src/server.ts",
"build": "rimraf ./build && tsc",
```
5. Create a new file `src/server.ts` and add the following code
```typescript
import { ApolloServer } from '@apollo/server';
import { startStandaloneServer } from '@apollo/server/standalone';
import typeDefs from './graphql_schemas';
import Mutation from './resolvers/mutation';
import Query from './resolvers/query';
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
});

console.log(`🚀  Server ready at: ${url}`);
```
6. change the tsconfig.json to 
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
7. Add the folloing line to package.json
```json
  "type": "module",
```
8. Run the project
```bash
npm run dev
```
9. Open the browser and go to `http://localhost:4000/graphql`

## References
- [Video](https://www.youtube.com/watch?v=qux4-yWeZvo&t=239s&ab_channel=LaithAcademy)
- [GraphQL](https://graphql.org/)
- [Express](https://expressjs.com/)
