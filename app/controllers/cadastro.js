module.exports.cadastro = function (application, req, res) {
    res.render('cadastro', {validacao: null, dados: null});
};


module.exports.cadastrar = function (application, req, res) {
    var dados = req.body;

    req.assert('nome', 'Nome é obrigatório.').notEmpty();
    req.assert('usuario', 'Usuário é obrigatório.').notEmpty();
    req.assert('senha', 'Informe uma senha.').notEmpty();
    req.assert('casa', 'Selecione uma casa.').notEmpty();

    var erros = req.validationErrors();

    if(erros) {
        res.render('cadastro', {validacao: erros, dados: dados});
        return
    }

    const connection = application.config.dbConnection;
    var UsuariosDAO = new application.app.models.UsuariosDAO(connection);
    UsuariosDAO.inserirUsuario(dados);

    res.send('Cadastrado');
};