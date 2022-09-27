const MongoClient = require('mongodb').MongoClient;

const connectionString = "mongodb://127.0.0.1:27017/got";

let dbConnection;

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
            
            dbConnection = client.db('got');
            console.log('Connected to Database');
        
            return callback(null)
        });
    },
  
    getDb: function () {
        console.log('Get db');
        return dbConnection;
    },
};

