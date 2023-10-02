import { gql } from '@apollo/client';

export const LOGIN_USER = gql`
  mutation login($email: String!, $password: String!) {
    login(email: $email, password: $password) {
      token
      user {
        _id
        firstName
        lastName
      }
    }
  }
`;

export const ADD_USER = gql`
  mutation addUser($firstName: String, $lastName: String, $email: String!, $password: String!, $isEmployer: Boolean!) {
    addUser(firstName: $firstName, lastName: $lastName, email: $email, password: $password, isEmployer: $isEmployer) {
      token
      user {
        _id
        firstName
        lastName
      }
    }
  }
`;

export const ADD_SKILL = gql`
  mutation AddSkill($email: String!, $newSkill: String!) {
  addSkill(email: $email, newSkill: $newSkill) {
    skills {
      name
    }
  }
}
`;