import { books, ratings } from '../data';
  export default {
    createBook: (_parent, { input }) => {
      const newBook = {
        id: books.length + 1,
        title: input.title,
        author: input.author,
        categoryId: parseInt(input.categoryId),
      };
      console.log('input: ', input, newBook);
      books.push(newBook);
      return newBook;
    },
    createRating: (_parent, { input }) => {
      const newRating = {
        id: ratings.length + 1,
        value: input.value,
        title: input.title,
        description: input.description,
        bookId: parseInt(input.bookId),
      };
      console.log('rating input: ', input, newRating);
      ratings.push(newRating);
      return newRating;
    },
    deleteBook: (_parent, { id }) => {
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