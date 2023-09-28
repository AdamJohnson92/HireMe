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
        education: 'Harvard',
        skills: [skills[0], skills[1]]
    });

    console.log('Users seeded');

    process.exit();

});