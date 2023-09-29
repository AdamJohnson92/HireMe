const { AuthenticationError } = require('apollo-server-express');
const { User, Skills } = require('../models');
const { signToken } = require('../utils/auth');

const resolvers = {
  Query: {
    users: async () => {
      return User.find().populate('skills');
    },
    user: async (parent, { email }) => {
      return User.findOne({ email }).populate('skills');
    },
    me: async (parent, args, context) => {
      if (context.user) {
        return User.findOne({ _id: context.user._id }).populate('skills');
      }
      throw new AuthenticationError('You need to be logged in!');
    },
  },

  Mutation: {
    addUser: async (parent, {firstName, lastName, email, password, isEmployer, userCity, userState, education, skills }) => {
      console.log("Received values:", { firstName, lastName, email, password, isEmployer, userCity, userState, education, skills });
      //Checks that all fields are given to create a user
      if (!email || !password || isEmployer === null) {
      throw new AuthenticationError('Email, Password, and Employer status required!');
      }
      // Attempt to create the user
      let user;
      try {
        user = await User.create({ firstName, lastName, email, password, isEmployer, userCity, userState, education, skills });
      } 
      catch (error) {
      // Handle duplicate email error
      if (error.code === 11000) {
          throw new AuthenticationError('A user with this email already exists!');
      }
      console.error(error); 
      throw new Error(error.message);
      }
      // Sign a token for the new user
      const token = signToken(user);

      return { token, user };
    
    },
    //need two different login mutations? Must discuss.
    login: async (parent, { email, password }) => {
      const user = await User.findOne({ email });

      if (!user) {
        throw new AuthenticationError('No user found with this email address');
      }

      const correctPw = await user.isCorrectPassword(password);

      if (!correctPw) {
        throw new AuthenticationError('Incorrect credentials');
      }

      const token = signToken(user);

      return { token, user };
    },
  },
};

module.exports = resolvers;
