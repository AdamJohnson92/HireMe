const express = require('express');
const db = require('./config/connection');

const app = express();
const PORT = process.env.PORT || 3001;

app.use(express.static('../client/dist'));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());


//require('./routes/htmlRoutes.js')(app);


db.once('open', () => {
  app.listen(PORT, function () {
    console.log(`Now listening on port: ${PORT}`);
  });
});