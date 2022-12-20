const express = require('express');
const mongoose = require('mongoose');
require('dotenv').config;
const cors = require('cors');

const app = express();

const {PORT, MONGOOSE_URL } = process.env


app.use(cors({ credentials: true, origin: "http://localhost:3000" }));
app.use(express.json());
app.use(require('./routes'))

const connectMongodbAndStart = async () => {
    try {
        await mongoose.connect(MONGOOSE_URL)  // подключаемся к базе данных монго 

        app.listen(PORT, () => {
            console.log(`Сервер запущен на ${PORT} порте  и подключен к Монго дб`); // запускаем сервер
        })
    } catch (error) {
        console.log(`Произошла ошибка ${error}`); // инструкция в случае ошибки 
    }
}

connectMongodbAndStart() // вызываем функцию которая будет подключаться к монго и запускать сервер 


