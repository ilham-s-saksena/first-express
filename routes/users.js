const express = require('express');
const router = express.Router();

const pool = require('../databases/config');

router.get('/', async (req, res) => {
    
    const result = await pool.query('SELECT * FROM users');

    let dataUser = [];

    const data = result.rows;
    
    data.forEach(element => {
        dataUser.push({
            id: element.id,
            name: element.name
        });
    });

    res.status(200)
    .send({
        'message' : `Here is Users Index Route`,
        'data' : dataUser
    });
});

router.get('/:name', (req, res) => {
    const { name } = req.params;
    res.status(200)
    .send({
        'message' : `User name = ${name}`
    });
});


module.exports = router