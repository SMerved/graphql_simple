import { gql } from '@apollo/client';
const GET_ALL_CATORIES = gql`
query GetAllCategories {
    categories {
      id
      name
    }
  }
  `;
export default GET_ALL_CATORIES;