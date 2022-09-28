const MongoClient = require('mongodb').MongoClient;

const connectionString = "mongodb://127.0.0.1:27017/got";

let dbConnection;
let database;

module.exports = {
    connectToServer: function (callback) {
        console.log('Criando a conexão');
        MongoClient.connect(connectionString, {
            useNewUrlParser: true,
            useUnifiedTopology: true,
          }, (err, client) => {
            if (err || !client) {
                console.log('ERROR AO CONECTAR COM O MONGO')
                return callback(err);
            }
            database = client;
            dbConnection = client.db('got');
            console.log('Connected to Database');
        
            return callback(null)
        });
    },
  
    getDb: function () {
        console.log('Get db');
        return dbConnection;
    },

    closeDb: function () {
        console.log('Close db');
        
        return database.close();
    },
};

