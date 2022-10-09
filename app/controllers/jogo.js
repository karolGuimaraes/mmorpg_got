module.exports.jogo = function (application, req, res) {

    if(!req.session.autorizado) {
        res.send('Usuário precisa fazer login');
        return;
    }
       
    const connection = application.config.dbConnection;
    const JogoDAO = new application.app.models.JogoDAO(connection);
    const usuario = req.session.usuario;
    const casa = req.session.casa;
    
    JogoDAO.iniciaJogo(req, res, usuario, casa);
    
    //res.render('jogo', {img_casa: req.session.casa});
}

module.exports.sair = function (application, req, res) {

    req.session.destroy( function(err, ){
        res.render('index', {validacao: null, dados: null});
    });
}

module.exports.suditos = function (application, req, res) {
    res.render('aldeoes');
}

module.exports.pergaminhos = function (application, req, res) {
    res.render('pergaminhos');
}