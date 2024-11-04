const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
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

module.exports = router