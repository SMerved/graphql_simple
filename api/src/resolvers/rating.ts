import { Rating, Book, Args, Context } from '../types';
export default {
    book: (parent:Rating, _args:never, context:Context) => context.books.find((book) => book.id === parent.bookId),
}