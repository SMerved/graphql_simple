import { gql } from '@apollo/client';
export default {
    query: gql`
      query GetBooks {
        books{
          id
          title
          author
          rating_average
          ratings {
            title
            value
          }
          category {
            name
            id
            books {
              title
              category {
                name
              }
            }
          }
        }
      }
    `,
  }