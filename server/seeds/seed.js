const db = require('../config/connection');
const { User, Education, Skills } = require('../models');

db.once('open', async () => {
    //Seeding Skills
    await Skills.deleteMany();

    const skills = await Skills.insertMany([
        { name: 'Javascript' },
        { name: 'CSS' },
    ]);

    console.log('Skills seeded');

    //Seeding Education
    await Education.deleteMany();

    const education = await Education.insertMany([
        { name: 'Stanford' },
        { name: 'Harvard' },
    ]);

    console.log('Education seeded');

    //Seeding User
    await User.deleteMany();

    await User.create({
        firstName: 'John',
        lastName: 'Wick',
        email: 'johnwick@testmail.com',
        password: 'password123',
        skills: [skills[0].name],
        education: [education[1].name]
    });

    console.log('Users seeded');

    process.exit();

});