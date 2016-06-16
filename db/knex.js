var environement = process.env.NODE_ENV || 'development';
var config = require('../knexfile.js')[environement];
module.exports = require('knex')(config);
