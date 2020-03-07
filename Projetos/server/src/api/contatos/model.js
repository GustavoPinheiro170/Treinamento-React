//criando o schema
const restful = require('node-restful');
const {Schema} = restful.mongoose; //referencia ao mongoose do restful
//definindo o schema contato
const contatos = new Schema({
 data: { type: Date, require : true},
 nome: { type: String, require : true},
 email: {type: String, require : true},
 assunto: { type: String, require : true}
});
module.exports = restful.model('contato', contatos);