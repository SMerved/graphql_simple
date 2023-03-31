// import { books, ratings } from '../data';
import { Book, Rating, Context, Args } from '../types';
  export default {
    createBook: (_parent:Book, { input }:Args, {books}:Context) => {
      if('author' in input){ // input is a Book
        const newBook: Book = {
          id: String(books.length + 1),
          title: input.title,
          author: input.author,
          categoryId: input.categoryId,
        };
        console.log('input: ', input, newBook);
        books.push(newBook);
        return newBook;
      } else {
        return null;
      }
      
    },
    createRating: (_parent:never, { input }:Args, {ratings}:Context) => {
      if('value' in input){ // input is a Rating
      const newRating:Rating = {
        id: String(ratings.length + 1),
        value: input.value,
        title: input.title,
        description: input.description,
        bookId: input.bookId,
      };
      console.log('rating input: ', input, newRating);
      ratings.push(newRating);
      return newRating;
    } else {
      return null;
    }
    },
    deleteBook: (_parent:never, { id }:Args, {books}:Context) => {
      const index = books.findIndex(person => person.id === id);
      if (index === -1) {
        return false; // person not found
      }
      books.splice(index, 1);
      return true; // deletion successful
    },
    updateBook: (_parent: never, { id, input }:Args, {books}:Context) => {
      const index = books.findIndex(person => person.id === id);
      if (index === -1) {
        return null; // person not found
      }
      const book = books[index];
      const updatedBook = { ...book, ...input };
      books[index] = updatedBook;
      return updatedBook;
    }
  }