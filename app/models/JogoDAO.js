function JogoDAO(connection) {
    this._connection = connection;
}

JogoDAO.prototype.gerarParametros = function(usuario){
    connection = this._connection.getDb();

    const query = {
        usuario: usuario,
        moeda: 15,
        suditos: 10,
        temor: Math.floor(Math.random() * 1000),
        sabedoria: Math.floor(Math.random() * 1000),
        comercio: Math.floor(Math.random() * 1000),
        magia: Math.floor(Math.random() * 1000)
    }

    connection
    .collection('jogo')
    .insertOne(query, function (err, result) {
        if (err) {
            console.log("Error inserting jogo!");
        } else {
            console.log(`Added a new jogo with id ${result.insertedId}`);
        }
    });
}

JogoDAO.prototype.iniciaJogo = function(req, res, usuario, casa){
    connection = this._connection.getDb();

    connection
    .collection('jogo')
    .findOne({usuario: usuario}, function (err, result) {
        if (err) {
            console.log('Jogo do usuário não encontrado');
        } else {
            console.log(result)
            if (result != undefined) {
                res.render('jogo', {img_casa: casa, jogo: result});
            } else {
                res.render('jogo', {img_casa: casa, jogo: null});
            }
        }
    });
}

module.exports = function(){
    return JogoDAO;
}