const db = require('../config/connection');
const { User, Skills } = require('../models');

db.once('open', async () => {
    //Seeding Skills
    await Skills.deleteMany();

    const skills = await Skills.insertMany([
        { name: 'Javascript' },
        { name: 'CSS' },
        { name: 'MongoDB' },
        { name: 'mySQL' }
    ]);

    console.log('Skills seeded');

    //Seeding User
    await User.deleteMany();

    await User.create({
        firstName: 'John',
        lastName: 'Wick',
        email: 'johnwick@testmail.com',
        password: 'password123',
        isEmployer: false,
        education: 'Harvard',
        userCity: 'Phoenix',
        userState: 'AZ',
        skills: [
            skills[0]._id, skills[1]._id
        ]
    });

    await User.create({
        firstName: 'Your',
        lastName: 'Employer',
        email: 'Employer@ceo.com',
        password: 'password123000',
        isEmployer: true,
    });

    console.log('Users seeded');

    process.exit();

});