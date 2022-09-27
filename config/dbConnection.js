const { MongoClient } = require("mongodb");

const connectionString = "mongodb://127.0.0.1:27017/meuestoque";
const client = new MongoClient(connectionString, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

let dbConnection;

module.exports = {
    connectToServer: function (callback) {
        console.log('Criando a conexão');
        client.connect(function (err, db) {
            if (err || !db) {
                return callback(err);
            }
    
            dbConnection = db.db("sample_airbnb");
            console.log("Successfully connected to MongoDB.");
    
            return callback();
        });
    },
  
    getDb: function () {
        console.log('Get db');
        return dbConnection;
    },
};

