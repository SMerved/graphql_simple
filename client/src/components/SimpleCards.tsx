import { useEffect, useState } from 'react';
import { ApolloClient, NormalizedCacheObject } from '@apollo/client';

import GetAllBooks from '../queries/GetAllBooks';
import BookCards from './BookCardGrid';

import { Book } from '../types';

const SimpleCards = ({client}:{client:ApolloClient<NormalizedCacheObject>}) => {
  const [books, setBooks] = useState<Book[]>([])
  useEffect(() => {
    (async () => {
      const result = await client.query(GetAllBooks);
      setBooks(result.data.books);
    })();
  }, []);

  return (
    <div className="simplecards">
      <h1>ALL BOOKS</h1>
      <p>This component is using the apollo client directly without useQuery. Therefore it does not get updated on new ratings</p>
      <BookCards books={books} />
    </div>
  )
}
export default SimpleCards;