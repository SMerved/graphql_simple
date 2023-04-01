import React, { useState } from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import { Book } from '../types';
import BookRating from './BookRating';

export default ({book}: { book: Book }) => {
    const [doRate, setDoRate] = useState(false);
    const changeToRatingForm = (evt:React.MouseEvent) => {
        // convert to HTMLElement to get the tag name
        const target = evt.target as HTMLElement;
        if(target.tagName === 'DIV' || target.tagName === 'P')
            setDoRate(!doRate);
    }
    return (
        <div onClick={changeToRatingForm}>
            <Card sx={{ maxWidth: 345 }} style={{
                display: 'block',
                width: '30vw',
                transitionDuration: '0.3s',
                height: '23vw',
                border: '1px solid #ccc',
            }}>
                <CardMedia
                    sx={{ height: 140 }}
                    image={book.url}
                    title={book.title}
                />
                <CardContent>
                    <Typography gutterBottom variant="h5" component="div">
                        {book.title}
                    </Typography>
                    <Typography gutterBottom variant="h8" component="div">
                        {book.author}
                    </Typography>
                    <Typography gutterBottom variant="h8" component="div">
                        Rating: {book.rating_average ? Math.round(book.rating_average*100)/100 : 'Not yet rated'}
                    </Typography>
                    <Typography gutterBottom variant="h8" component="div">
                        Category: {book.category ? book.category.name : ''}
                    </Typography>
                    {doRate ? <>
                        <BookRating book={book} />
                    </> : <>
                        <Typography variant="body2" color="text.secondary" align="left">
                            {book.description.length > 272 ? book.description.slice(0, 272) + '...' : book.description}
                        </Typography>
                    </>}
                </CardContent>
                <CardActions>
                    {/* <Button size="small">Share</Button>
                <Button size="small">Learn More</Button> */}
                </CardActions>
            </Card>
        </div>)
}
