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
    //Adding in update mutations on City, State, Education, and Skills
    updateUserCity: async (parent, { email, newCity }, context) => {
      // if (!context.user) {
      //   throw new AuthenticationError('You need to be logged in!');
      // }
      const updatedUser = await User.findOneAndUpdate({email}, { userCity: newCity }, { new: true });
      return updatedUser;
    },
    updateUserState: async (parent, { email, newState }, context) => {
      // if (!context.user) {
      //   throw new AuthenticationError('You need to be logged in!');
      // }
      const updatedUser = await User.findOneAndUpdate({email}, { userState: newState }, { new: true });
      return updatedUser;
    },
    updateEdu: async (parent, { email, newEdu }, context) => {
      // if (!context.user) {
      //   throw new AuthenticationError('You need to be logged in!');
      // }
      const updatedUser = await User.findOneAndUpdate({email}, { education: newEdu }, { new: true });
      return updatedUser;
    },
    addSkill: async (parent, { email, newSkill }, context) => {
      
      const existingSkill = await Skills.findOne({ name: newSkill });
    
      if (!existingSkill) {
        
        const newSkillDocument = await Skills.create({ name: newSkill });
    
        // Add the new skill's ID to the user's skills array
        const updatedUser = await User.findOneAndUpdate(
          { email },
          { $addToSet: { skills: newSkillDocument._id } },
          { new: true }
        ).populate('skills');
    
        return updatedUser;
      } else {
        // If the skill already exists, just add it to the user's skills array
        const updatedUser = await User.findOneAndUpdate(
          { email },
          { $addToSet: { skills: existingSkill._id } },
          { new: true }
        ).populate('skills');
    
        return updatedUser;
      }
    },
    
    removeSkill: async (parent, { email, oldSkill }, context) => {

      const skillToRemove = await Skills.findOne({ name: oldSkill });
    
      if (skillToRemove) {
        
        const updatedUser = await User.findOneAndUpdate(
          { email },
          { $pull: { skills: skillToRemove._id } },
          { new: true }
        ).populate('skills');
    
        return updatedUser;
      } else {
        // Skill not found, return the user without any changes.
        const user = await User.findOne({ email }).populate('skills');
        return user;
      }
    }

  },
};

module.exports = resolvers;
