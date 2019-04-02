const db = require('../models');


module.exports = function (app) {
app.post('/api/chat', function (req, res) {
    db.Msg.create(req.body)
        .then(function (data) {
            console.log({d: data});
            res.json(data);
        })
        .catch(function (err) {
            res.json(err);
        });
});

app.get('/api/load', function (req, res) {
    db.Msg.find({})
        .then(function (data) {
            res.json(data);
        })
        .catch(function (err) {
            res.json(err);
        });
});



};