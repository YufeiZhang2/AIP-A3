const express = require("express");
const router = express.Router();
const userModel = require('../models/userModel');

//read all the users 
router.get("/", async (req, res) => {
    const users = await userModel.find();
    res.send(users);
});

//read a user by its objectId
router.get("/:_id", async (req, res) => {
    try {
        console.log("my test:", req.params._id);
        const user = await userModel.find({ _id: req.params._id });
        res.send(user);
    } catch (err) {
        //404 object not found
        res.status(404).send('The user with the given ID was not found.');
    }
});

//delete a user by its objectId
router.delete("/delete/:_id", async (req, res) => {
    try {
        console.log("my test:", req.params._id);
        const result = await userModel.deleteOne({ _id: req.params._id });
        res.send(result);
    } catch (err) {
        //404 object not found
        res.status(404).send('The movie with the given ID was not found.');
    }
});


module.exports = router;