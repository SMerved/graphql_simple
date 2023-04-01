import { Book, Category, Rating, Context } from '../types';
export default {
  // Resolver for the Category.books field. It will be called with the parent Category object as the first argument.
  // The Category resolver will be called when we query for a category, and the Category.books field will be resolved.
    books: (parent:Category, _args:never, context:Context) => context.books.filter((book) => book.categoryId === parent.id),
}