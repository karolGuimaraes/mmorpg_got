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
    
    //this._connection.closeDb();
}


UsuariosDAO.prototype.autenticar = function(req, res, usuario){
    connection = this._connection.getDb();

    // const query = { usuario: usuario.usuario, senha: usuario.senha };
    // console.log(query);

    connection
    .collection('usuario')
    .findOne(usuario, function (err, result) {
        if (err) {
            console.log('Usuário não encontrado');
        } else {
            if (result != undefined) {
                req.session.autorizado = true;
                req.session.usuario = result.usuario;
                req.session.casa = result.casa;
                res.redirect('jogo');
            } else {
                req.session.autorizado = false;
                res.render('index', {validacao: [{"msg": "Usuário e senha não encontrados"}], dados: null});
            }
        }
    });

    //this._connection.closeDb();  
}

module.exports = function(){
    return UsuariosDAO;
}