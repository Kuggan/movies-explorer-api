require('dotenv').config();
const rateLimit = require('express-rate-limit');

const limiter = rateLimit({
  windowMs: 15 * 60 * 1000,
  max: 1000,
});

const {
  NODE_ENV,
  JWT_SECRET,
  PORT = 3000,
  DB_ADDRESS,
} = process.env.NODE_ENV !== 'production';

const KEY = NODE_ENV === 'production' ? JWT_SECRET : 'dev-secret';

const DB_NAME = NODE_ENV === 'production' ? DB_ADDRESS : 'mongodb://localhost:27017/bitfilmsdb';

const DB_OPTIONS = {
  useNewUrlParser: true,
  useCreateIndex: true,
  useFindAndModify: false,
  useUnifiedTopology: true,
};

const CORS_OPTIONS = {
  origin: ['https://moviessearch.kuggan.nomoredomains.icu'],
  credentials: true,
};

module.exports = {
  limiter,
  KEY,
  DB_NAME,
  DB_OPTIONS,
  PORT,
  CORS_OPTIONS,
};
