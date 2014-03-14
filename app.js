var express = require('express'),
    app = express();

var SERVER= { PORT: 8000,
			  maxAge: 0}; //no cache

/**
 * Middleware
 */
app.use(express.static(__dirname + '/public', { maxAge: SERVER.maxAge }));

console.log ( 'starting on' , SERVER.PORT )
module.exports = app.listen( SERVER.PORT );
