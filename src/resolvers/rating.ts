export default {
    book: (parent, _args, context) => context.books.find((book) => book.id === parent.bookId),
}