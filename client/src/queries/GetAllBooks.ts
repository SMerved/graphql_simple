import { gql } from '@apollo/client';
export default {
    query: gql`
      query GetBooks {
        books{
          id
          title
          author
          url
          description
          rating_average
          ratings {
            title
            value
          }
          category {
            name
          }
        }
      }
    `,
  }