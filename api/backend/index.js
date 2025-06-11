/* eslint-disable no-console */
require('dotenv').config();
const initApp = require('./app.js');
const port = process.env.PORT;

const startServer = async () => {
  const app = await initApp();
  app.listen(port, '0.0.0.0', () => {
    console.log(`Example app listening on port ${port}`);
  });
};

startServer();
/* eslint-enable no-console */
