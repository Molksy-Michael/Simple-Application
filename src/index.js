const express = require('express'),
    path = require('path'),
    routes = require('./routes'),
    content = require('./js/db/route');

let app = express();
app.set('port', 3000);

app.use(express.static(path.join(__dirname, '/static')));

app.use('/', routes);
app.use('/content', content);

app.listen(app.get('port'), () => {
    console.log('Server running on port 3000');
});
