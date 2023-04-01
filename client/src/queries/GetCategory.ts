import { gql } from '@apollo/client';
const GET_CATEGORY = gql`
query GetCategory($id: ID){
  category(id:$id) {
    id
    name
    books {
      id
      author
      title
      url
      description
      rating_average
      category {
        id
        name
      }
    }
  }
}
`;
export default GET_CATEGORY;