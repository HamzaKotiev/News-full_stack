const User = require("../models/User.model");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const News = require("../models/News.model");
const Comment = require("../models/Comment.model");

module.exports.newsController = {
    getComment: async (req, res) => {
        try {
            const comment = await Comment.find()

            return res.json(comment)
        } catch (error) {
            res.json({ error: error.message });
        }
    },
    addComment: async (req, res) => {
        try {
            const comment = await Comment.create({
                usernick: req.body.usernick,
                text: req.body.text,
                when: req.body.when,
                author: req.body.author,
                news: req.body.news,
            })

            return res.json(comment)
        } catch (error) {
            return res.json({ error: error.message });
        }
    },
    updateComment: async (req, res) => {
        try {
            const comment = await Comment.findByIdAndUpdate(req.params.id, {
                usernick: req.body.usernick,
                text: req.body.text,
                when: req.body.when,
                author: req.body.author,
                news: req.body.news,
            },{new: true})
            return res.json(comment)
        } catch (error) {
            return res.json({ error: error.message });
        }
    },
    deleteComment: async (req,res) => {
        try {
            const comment = await Comment.findByIdAndDelete(req.params.id)

            return res.json('удалено ')
        } catch (error) {
            
        }
    }
}