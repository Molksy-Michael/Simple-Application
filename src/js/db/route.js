let express = require('express'),
    ContentService = require('./service');

let router = express.Router();

router.get('/getAll', (req,res) => {
    res.send(ContentService.getAll());
});

module.exports = router;