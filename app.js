/* importar as configurações do servidor */
var app = require('./config/server');
const db = require('./config/dbConnection');



db.connectToServer(function (err) {
	if (err) {
	  console.error(err);
	  process.exit();
	}
  
	/* parametrizar a porta de escuta */
	app.listen(3000, function(){
		console.log('Servidor online');
	})
});
