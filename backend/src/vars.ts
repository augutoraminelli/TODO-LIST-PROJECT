import dotenv from 'dotenv';

const { env } = process

export default {
  api: {
    port: env.API_PORT || env.PORT || 3000,
  },
  db: {
    uri: env.MONGO_URI || 'mongodb://localhost:27017/db',
  },
}