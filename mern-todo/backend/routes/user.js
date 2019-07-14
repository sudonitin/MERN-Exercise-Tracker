const router = require('express').Router();
let User = require('../models/user.model');

router.route('/').get((req, res) => {
    User.find() //a mongoose fn which returns all the users
    .then(user => res.json(user))
    .catch(err => res.status(400).json('Error: ' + err));
});

router.route('/add').post((req,res) => {
    const username = req.body.username;
    const newUser = new User({username});
    newUser.save() // mongoose fn used to add data to DB
        .then(() => res.json('User added'))
        .catch(err => res.status(400).json('Error: '+ err));
});

module.exports = router;