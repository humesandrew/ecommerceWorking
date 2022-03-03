const express = require('express');
const routes = require('./routes');
// import sequelize connection
const sequelize = require('./config/connection.js');

const app = express();
const PORT = process.env.PORT || 3001;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(routes);

// sync sequelize models to the database, then turn on the server
// i'm going to set this to force: true for now for the video walkthrough, to show me seed.
// Remember to switch back to force: false when submitting/



sequelize.sync({ force: false }).then(() => {
  app.listen(PORT, () => {
    console.log(`App listening on port ${PORT}!`);
  });
});


// to allow existing db// 