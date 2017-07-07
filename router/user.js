/**
 * Created by Danny on 2017-07-07.
 */
let express = require('express');
let router = express.Router();
router.get('/signin',function (req,res) {
    res.send('注册')
})
router.get('/signup',function (req,res) {
    res.send('登陆')
});
module.exports = router;