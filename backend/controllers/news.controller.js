const User = require("../models/User.model");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const News = require("../models/News.model");

module.exports.newsController = {
    getAllNews: async (req, res) => {
        try {
            const news = await News.find()

            return res.json(news)
        } catch (error) {
            return res.json({ error: error.message })
        }

    },

    // три нижних функции будут доступный только админу 
    addNews: async (req, res) => {
        try {
            const news = await News.create({
                title: req.body.title,
                text: req.body.text,
                catygories: req.body.catygories,
                when: req.body.when,
                author: req.body.author,
                popularity: req.body.popularity
            })

            return res.json(news)
        } catch (error) {
            return res.json({ error: error.message })
        }
    },
    updateNews: async (req, res) => {
        try {
            const news = await News.findByIdAndUpdate(req.params.id, {
                title: req.body.title,
                text: req.body.text,
                catygories: req.body.catygories,
                when: req.body.when,
                author: req.body.author,
                popularity: req.body.popularity
            })

            return res.json(news)
        } catch (error) {
            return res.json({ error: error.message })
        }
    },
    deleteNews: async (req, res) => {
        try {
            const news = await News.findByIdAndDelete(req.params.id)

            return res.json(news)
        } catch (error) {
            return res.json({ error: error.message })
        }
    },


    getNewsById: async (req, res) => {

    },
    getNewsByCatygori: async (req, res) => {

    },
    getNewsByWhen: async (req, res) => {

    },
    getNewsByPopularity: async (req, res) => {

    },

};
