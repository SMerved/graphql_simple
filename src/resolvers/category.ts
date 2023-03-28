// import { books } from '../data';
export default {
  // Resolver for the Category.books field. It will be called with the parent Category object as the first argument.
  // The Category resolver will be called when we query for a category, and the Category.books field will be resolved.
    books: (parent, args, context) => context.books.filter((book) => book.categoryId === parent.id),
}