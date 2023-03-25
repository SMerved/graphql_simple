import { books } from '../data';
  export default {
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