// import { books, categories } from '../data';
export default {
    // books: (parent, args, context) => books,
    books: (_parent, _args, {books}) => books,
    categories: (_parent, _args, {categories}) => categories,
    book: (_parent, { id }, {books}) => { console.log('ID: ', id); const b = books.find((book) => book.id === parseInt(id)); console.log(b); return b; },
    category: (_parent, { id }, {categories}) => categories.find((category) => category.id === parseInt(id)),
}