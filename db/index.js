const mongoose = require('mongoose');
const config = require('getconfig');

const DB_URL = process.env.DB_URL || config.db.url;

const db = mongoose.connection;

db.on('error', console.error.bind(console, 'connection error:'));

db.once('open', () => {
    console.log('Database connection successful')
});

module.exports.connect = () => mongoose.connect(DB_URL, { useNewUrlParser: true });

