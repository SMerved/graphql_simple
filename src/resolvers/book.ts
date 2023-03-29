// import {categories} from "../data";
import {Book, Category, Rating, Context} from "../types";
export default {
    category: (parent:Book, _args:never, {categories}:Context) => categories.find((category) => category.id === parent.categoryId),
    ratings: (parent:Book, _args:never, {ratings}:Context) => ratings.filter((rating) => rating.bookId === parent.id),
    rating_average: (parent:Book, _args:never, {ratings}:Context) => {
        const ratingsForBook = ratings.filter((rating) => rating.bookId === parent.id);
        if (ratingsForBook.length === 0) {
            return 0;
        }
        const sum = ratingsForBook.reduce((acc, rating) => acc + rating.value, 0);
        return sum / ratingsForBook.length;
    }
};