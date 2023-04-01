import { useState } from 'react';
import { gql, useMutation } from '@apollo/client';
import Rating from '@mui/material/Rating';
import Typography from '@mui/material/Typography';

import CREATE_RATING from '../queries/CreateRating';
import GET_ALL_BOOKS from '../queries/GetAllBooks';

import {Book} from '../types';
export default ({book}:{book:Book}) => {
    const [rating, setRating] = useState({value:0, title:'', description:'', bookId:book.id});
    
    const [mutateFunction, { data, loading, error }] = useMutation(CREATE_RATING,{
        refetchQueries: [GET_ALL_BOOKS]
    }); //mutateFunction is the function to call for server update. refetchQueries is the list of queries to refetch after the mutation is done. And if they were used with useQuery, they will be updated with the new data.
    if (loading) return <>'Submitting...'</>;
    if (error) return <>`Submission error! ${error.message}`</>;

    const createNewRating = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        mutateFunction({variables: { ratingInput: rating }}); 
    }

    return (<>
        <form onSubmit={createNewRating}>
        <Typography component="legend">Rating</Typography>
      <Rating name="simple-controlled" value={rating.value} onChange={(evt, newValue) => { setRating({...rating, value: newValue as number}); }} />
            <br/>
            <label>
                <input type="text" name="title" placeholder='Title of rating' value={rating.title} onChange={(evt)=>{setRating({...rating, title:evt.target.value})}}/>
            </label><br/>
            <label>
                <input type="text" name="description" placeholder='Rating details' value={rating.description} onChange={(evt)=>{setRating({...rating, description:evt.target.value})}}/>
            </label><br/>
            <input type="submit" value="Add new Rating" />
        </form>
    </>);
}