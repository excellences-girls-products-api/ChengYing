var express = require('express');
var router = express.Router();


var MongoClient = require('mongodb').MongoClient;
var DB_CONN_STR = 'mongodb://localhost:27017/users';
var data = [];

router.get('/imagesdelete', function (req, res) {
    res.sendfile('./views/delete.html');
});

router.post('/imagesdelete', function (req, res) {
    var delData = function(db, callback) {
        //连接到表
        var collection = db.collection('user');
        //删除数据
        var whereStr = {"name":req.body.name};
        collection.remove(whereStr, function(err, result) {
            if(err)
            {
                console.log('Error:'+ err);
                return;
            }
            callback(result);
        });
    }

    MongoClient.connect(DB_CONN_STR, function(err, db) {
        console.log("连接成功！");
        delData(db, function(result) {
            console.log(result);
            db.close();
            res.send('用户删除成功！');
        });
    });
});
/* GET home page. */
// router.get('/', function(req, res, next) {
//   res.render('index', { title: 'Express' });
// });

module.exports = router;
