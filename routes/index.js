var express = require('express');
var router = express.Router();


var MongoClient = require('mongodb').MongoClient;
var DB_CONN_STR = 'mongodb://localhost:27017/users';
var data = [];

router.get('/images', function (req, res) {
    res.sendfile('./views/post.html');
});

router.post('/images', function (req, res) {

    data = {name: req.body.name, age: req.body.age};
  
    var insertData = function (db, callback) {
        var collection = db.collection('user');

        collection.insert(data, function (err, result) {
            if (err) {
                console.log('Error:' + err);
                return;
            }
            callback(result);
        });
    };

    MongoClient.connect(DB_CONN_STR, function (err, db) {
        console.log("连接成功！");
        insertData(db, function (result) {
            console.log(result);
            db.close();
            res.send('用户添加成功！');
        });
    });
});
/* GET home page. */
// router.get('/', function(req, res, next) {
//   res.render('index', { title: 'Express' });
// });

module.exports = router;
