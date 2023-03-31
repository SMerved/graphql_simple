type Book = {
    id: string;
    title: string;
    author: string;
    categoryId: string;
};
type Category = {
    id: string;
    name: string;
};
type Rating = {
    id: string;
    value: number;
    title: string;
    description: string;
    bookId: string;
};
type Context = {
    categories: Category[];
    ratings: Rating[];
    books: Book[];
};
type Args = {
    id: string;
    input: Book | Rating;
};
export type { Book, Category, Rating, Context, Args };