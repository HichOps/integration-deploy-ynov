const path = require('path');

module.exports = {
  development: {
    dialect: 'sqlite',
    // Construit un chemin absolu depuis l'emplacement de config.js
    // __dirname ici sera /home/ubuntu/integration-deploy-ynov/api/backend/app/config
    // donc nous remontons d'un niveau pour être dans /home/ubuntu/integration-deploy-ynov/api/backend/app
    // puis nous spécifions database.sqlite
    storage: path.resolve(__dirname, '../database.sqlite'),
    logging: false
  },
  test: {
    dialect: 'sqlite',
    storage: path.resolve(__dirname, '../database.sqlite'),
    logging: false
  },
  production: {
    dialect: 'sqlite',
    storage: path.resolve(__dirname, '../database.sqlite'), // Important pour la production aussi !
    logging: false
  }
};