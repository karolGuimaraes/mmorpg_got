module.exports.main = function (application, req, res) {
    res.render('index', {validacao: null, dados: null});
}

module.exports.autenticar = function (application, req, res) {
    const dados = req.body;

    req.assert('usuario', 'Usuário é obrigatório').notEmpty();
    req.assert('senha', 'Senha é obrigatória').notEmpty();

    var erros = req.validationErrors();

    if(erros) {
        res.render('index', {validacao: erros, dados: dados});
        return
    }

    const connection = application.config.dbConnection;
    var UsuariosDAO = new application.app.models.UsuariosDAO(connection);
    UsuariosDAO.autenticar(req, res, dados);

}