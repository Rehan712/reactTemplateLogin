const express = require('express');
const app = express();

// run middleware
require('./middlewares')(app);

// run routes

require('./routes')(app);

app.listen(3000, () => {
	console.log('node is listening on port 3000');
});
