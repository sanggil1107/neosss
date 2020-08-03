const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
    console.log('http://localhost:3001/');
    res.send({title: 'hello react!'});
});

router.get('/api', (req, res) => {
    console.log('http://localhost:3001/api/');
    res.send({username:'home'});
});

module.exports = router;