import { books, categories } from '../data';
export default {
    books: () => books,
    categories: () => categories,
    book: (_parent, { id }) => { console.log('ID: ', id); const b = books.find((book) => book.id === parseInt(id)); console.log(b); return b; },
    category: (_parent, { id }) => categories.find((category) => category.id === parseInt(id)),
}