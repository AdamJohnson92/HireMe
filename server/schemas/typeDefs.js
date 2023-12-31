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
    updateUserCity(email: String!, newCity: String!): User
    updateUserState(email: String!, newState: String!): User
    updateEdu(email: String!, newEdu: String!): User
    addSkill(email: String!, newSkill: String!): User
    removeSkill(email: String!, oldSkill: String!): User
  }
`;

module.exports = typeDefs;
