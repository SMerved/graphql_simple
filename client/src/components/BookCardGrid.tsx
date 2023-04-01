// MUI CARD LAYOUT
import Grid from '@mui/material/Grid';
import BookCard from './BookCard';

import {Book } from '../types';
export default ({books}: {books:Book[]}) => {
    return (
        <Grid container rowSpacing={6} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>

        {books.map((book) => (
          <Grid item xs={4} key={book.id}>
          <BookCard book={book} />
          </Grid>
        ))}
      </Grid>
    );
}