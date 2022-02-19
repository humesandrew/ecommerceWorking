const router = require('express').Router();
const apiRoutes = require('./api');
// const seedsRoutes = require('./seed');

router.use('/api', apiRoutes);
// router.use('/seeds', seedsRoutes);

router.use((req, res) => {
  res.send("<h1>Wrong Route!</h1>")
});

module.exports = router;