var express = require('express');
var router = express.Router();
var MongoClient = require('mongodb').MongoClient;
var DB_CONN_STR = 'mongodb://localhost:27017/users';

router . get ( '/imagespost' , function ( req , res ) {
    res . sendfile('./views/post(not get).html') ;
});

router.post('/imagespost', function (req, res) {


    var updateData = function (db, callback) {
        //连接到表
        var collection = db.collection('user');
        //更新数据
        var whereStr = {"name": req.body.name};
        var updateStr = {$set: {"age": req.body.age}};
        collection.update(whereStr, updateStr, function (err, result) {
            if (err) {
                console.log('Error:' + err);
                return;
            }
            callback(result);
        });
    }

    MongoClient.connect(DB_CONN_STR, function (err, db) {
        console.log("连接成功！");
        updateData(db, function (result) {
            console.log(result);
            db.close();
            res.send('用户修改成功！');
        });
    });
});

module.exports = router;
