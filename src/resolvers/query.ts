// import { books, categories } from '../data';
import { Book, Args, Context } from '../types';
export default {
    // books: (parent, args, context) => books,
    books: (_parent:never, _args:Args, {books}:Context) => books,
    categories: (_parent:never, _args:Args, {categories}:Context) => categories,
    book: (_parent:never, { id }:Args, {books}:Context) => { console.log('ID: ', id); const b = books.find((book) => book.id === id); console.log(b); return b; },
    category: (_parent:never, { id }:Args, {categories}:Context) => categories.find((category) => category.id === id),
}