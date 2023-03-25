import {categories} from "../data";

export default {
    category: (parent:{categoryId:number}, _args:never, _context:never) => categories.find((category) => category.id === parent.categoryId),
};