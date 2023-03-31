import { useState, useEffect } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
// https://www.apollographql.com/docs/react/get-started
import { ApolloClient, InMemoryCache, ApolloProvider, gql } from '@apollo/client';
import GetAllBooks from './queries/GetAllBooks';

const client = new ApolloClient({
  uri: 'http://localhost:4000/graphql',
  cache: new InMemoryCache(),
});
type Book = {
  id: string;
  title: string;
  author: string;
  rating_average: number;
}

function App() {
  const [books, setBooks] = useState<Book[]>([])
  useEffect(() => {
    (async () => {
    const result = await client.query(GetAllBooks);
    setBooks(result.data.books);
    })();
  }, []);


  return (
    <div className="App">
      {books.map((book) => (
        <div key={book.id}>
          <h1>{book.title}</h1>
          <p>{book.author} rating: {book.rating_average}</p>

        </div>
        ))}      
    </div>
  )
}

export default App
