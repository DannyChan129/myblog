let express = require('express');
let app = express();
let index = require('./router/index')
let user = require('./router/user')
app.listen(8080,function () {
    console.log('成功8080');
});
app.use('/',index);
app.use('/user',user);