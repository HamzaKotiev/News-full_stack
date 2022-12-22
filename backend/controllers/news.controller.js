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

    // 
    addNews: async (req, res) => {
        try {
            const news = await News.create({
                title: req.body.title,
                text: req.body.text,
                categories: req.body.categories,
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
                categories: req.body.categories,
                when: req.body.when,
                author: req.body.author,
                popularity: req.body.popularity
            },{new: true})

            return res.json(news)
        } catch (error) {
            return res.json({ error: error.message })
        }
    },
    deleteNews: async (req, res) => {
        try {
            const news = await News.findByIdAndDelete(req.params.id)

            return res.json('Удалено')
        } catch (error) {
            return res.json({ error: error.message })
        }
    },


    getNewsById: async (req, res) => {
        try {
            const news = await News.findById(req.params.id)
            return res.json(news)
        } catch (error) {
            return res.json({ error: error.message })
        }
    },
    getNewsByCategori: async (req, res) => {
        try {
            const news = await News.find({categories: req.body.categories})

            return res.json(news)
        } catch (error) {
            return res.json({ error: error.message })
        }
    },
    getNewsByWhen: async (req, res) => {
        try {
            const news = await News.find({when: req.body.when})

            return res.json(news)
        } catch (error) {
            return res.json({ error: error.message })
        }
    },
    getNewsByPopularity: async (req, res) => {
        try {
            const news = await News.find({popularity: req.body.popularity})

            return res.json(news)
        } catch (error) {
            return res.json({ error: error.message })
        }
    },

};
