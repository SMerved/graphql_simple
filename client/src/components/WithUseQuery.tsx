import React, { useEffect, useState } from 'react';

// apollo client
import { useQuery } from '@apollo/client';
import GetCategory from '../queries/GetCategory';
import { Category } from '../types';
import DropDown from './DropDown';

import BookCards from './BookCardGrid';

const CategoryViewer = () => {
  const [category, setCategory] = useState<Category>({ id: '1', name: 'something', books: [] });


  const { loading, error, data } = useQuery(GetCategory, {
    variables: { id: category.id},
  });

  if (loading) return <p>Loading ...</p>;

  return (
    <>
    <DropDown setCategory={setCategory} category={category} />
    <div className="simplecards">
      <h1>Category: {data.category.name} books</h1>
      <BookCards books={data.category.books} />
    </div>
    </>
  )
}
export default CategoryViewer;