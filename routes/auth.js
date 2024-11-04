const express = require('express');
const router = express.Router();

router.post('/login', (req, res) => {
    const { email, password} = req.body;
    if (!email  && !password) {
        res.status(404)
        .send({
            'message' : `User not found`
        });
    }
    res.status(200)
    .send({
        'message' : `User: ${email}`
    });
});

module.exports = router