const { gql } = require('apollo-server-express');

const typeDefs = gql`
  type User {
    _id: ID
    firstName: String
    lastName: String
    email: String
    userCity: String
    userState: String
    education: String
    skills: [Skills]
    isEmployer: Boolean
  }
  type Skills {
    _id: ID
    name: String
  }

  type Auth {
    token: ID!
    user: User
  }

  type Query {
    users: [User]
    user(email: String!): User
    me: User
  }

  type Mutation {
    addUser(firstName: String, lastName: String, email: String!, password: String!, isEmployer: Boolean!, userCity: String, userState: String, education: String, skills: [String]): Auth
    login(email: String!, password: String!): Auth
    updateUserCity(userId: ID!, newCity: String!): User
    updateUserState(userId: ID!, newState: String!): User
  }
`;

module.exports = typeDefs;
