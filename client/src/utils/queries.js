import { gql } from '@apollo/client';

export const QUERY_USER = gql`
  query user($firstName: String!, $lastName: String!) {
    user(firstName: $firstName, lastName: $lastName) {
      _id
      firstName
      lastName
      email
      }
    }
`;
export const QUERY_ME = gql`
  query me {
    me {
      _id
      firstName
      lastName
      email
    }
  }
`;
