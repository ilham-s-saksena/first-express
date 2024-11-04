const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
    
    res.status(200)
    .send({
        'message' : `Here is Users Index Route`
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