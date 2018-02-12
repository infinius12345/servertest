module.exports = function (app) {
    var Item = require('./../models/items.js');
    var express = require('express');
    var router = express.Router();

    router.route('/items')
        .get(function (req, res) {
            Item.find(function(error,doc){
                console.log(doc);
                res.send(doc);
            });
        })
        .post(function (req, res) {
            console.log(req);
            var item = new Item(req.body);
            item.save(function(err,data){
                res.status(300).send();
            });
        });

    router.route('/items/:name')
        .delete(function (req,res) {
            console.log("delete", req.params.name);
            console.log("typeof", typeof(req.params.name))
            Item.remove({name:req.params.name},function (err) {
                if(err) console.log(err);
                else console.log("deleted");

            });
            console.log("delete");
        })
        .patch(function(req,res){
            console.log("req",req);
            Item.findOne({
                name:req.params.name
            },function (error,doc) {
                console.log("doc",doc);
                console.log("req",req.body);
                for(var key in req.body){
                    doc[key] = req.body[key];
                }
                doc.save();
                res.status(200).send();
            })
        })

    app.use('/api', router);

}