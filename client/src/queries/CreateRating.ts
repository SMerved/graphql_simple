import {gql} from '@apollo/client';
// Define mutation
const CREATE_RATING = gql`
  # Create a new rating
  mutation CreateRating($ratingInput: RatingInput!){
    createRating(input: $ratingInput) {
      id
      title
      value
      description
      book {
        title
      }
    }
  }
`;
export default CREATE_RATING;