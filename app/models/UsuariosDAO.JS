function UsuariosDAO(connection) {
    this._connection = connection;
}

UsuariosDAO.prototype.inserirUsuario = function(usuario){
    connection = this._connection.getDb();
    connection
    .collection("usuario")
    .insertOne(usuario, function (err, result) {
        if (err) {
            console.log("Error inserting usuario!");
        } else {
            console.log(`Added a new match with id ${result.insertedId}`);
        }
    });
    
}

module.exports = function(){
    return UsuariosDAO;
}