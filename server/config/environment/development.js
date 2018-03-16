'use strict';
/*eslint no-process-env:0*/

// Development specific configuration
// ==================================
module.exports = {
    // MongoDB connection options
    mongo: {
       // uri: 'mongodb://localhost/example-dev'
       uri: 'mongodb://Pipal:Paper3003!@cluster0-shard-00-00-r6ymi.mongodb.net:27017,cluster0-shard-00-01-r6ymi.mongodb.net:27017,cluster0-shard-00-02-r6ymi.mongodb.net:27017/test?ssl=true&replicaSet=Cluster0-shard-0&authSource=admin',
    },

    // Seed database on startup
    seedDB: true
};
