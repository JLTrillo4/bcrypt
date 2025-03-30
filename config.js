const crypto = require('crypto'); //genera una clave aleatoria
const bcrypt = require('bcrypt'); //encripta esa clase aleatoria

const secret = crypto.randomBytes(10).toString('hex');
const hashedSecret = bcrypt.hashSync(secret, 10);


module.exports = hashedSecret

//console.log(secret);