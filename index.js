const express = require('express');
const app = express();

// root route
app.get('/', (req, res) => {
    res.status(200)
    .send({
        'message' : 'server is runing'
    });
});

app.use(express.json());
app.use(express.urlencoded({extended: true}));

app.use('/users', require('./routes/users'));
app.use('/auth', require('./routes/auth'));
app.use('/search', require('./routes/search'));

// not found route
app.get('*', (req, res) => {
    res.status(404)
    .send({
        'message' : 'not found'
    });
});

app.listen(8080, () => {
    console.log('server is runing');
});