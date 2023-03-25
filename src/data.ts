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

export {
    books,
    categories,
};