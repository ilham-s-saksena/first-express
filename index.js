const express = require('express');
const app = express();
// app.use((req, res)=>{
//     console.log('we got request');
//     res.status(200).send({'some': 'json'});
// });

app.get('/', (req, res) => {
    res.status(200)
    .send({
        'message' : 'server is runing'
    });
});

app.get('/search', (req, res) => {
    const { q } = req.query;
    if (!q) {
        res.status(404)
        .send({
            'message' : `Nothing to search`
        });
    }
    res.status(200)
    .send({
        'message' : `Query Serach: ${q}`
    });
});

app.get('/user/:name', (req, res) => {
    const { name } = req.params;
    res.status(200)
    .send({
        'message' : `User name = ${name}`
    });
});

app.get('*', (req, res) => {
    res.status(404)
    .send({
        'message' : 'not found'
    });
});

app.listen(8080, () => {
    console.log('server is runing');
});