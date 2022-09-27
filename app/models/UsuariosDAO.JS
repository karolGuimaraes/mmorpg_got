function UsuariosDAO(connection) {
    this._connection = connection.getDb();
}

UsuariosDAO.prototype.inserirUsuario = function(usuario){

    this._connection
    .collection("usuario")
    .insertOne(usuario, function (err, result) {
        if (err) {
            console.log("Error inserting usuario!");
        } else {
            console.log(`Added a new match with id ${result.insertedId}`);
        }
    });
    
    this._connection.close();
}

module.exports = function(){
    return UsuariosDAO;
}