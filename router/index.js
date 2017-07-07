/**
 * Created by Danny on 2017-07-07.
 */
let express = require('express');
let router = express.Router();

router.get('/',function (req,res) {
    res.send('首页')
});

module.exports = router;