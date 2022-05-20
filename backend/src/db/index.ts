import mongoose from 'mongoose';
import vars from '../vars';

const MONGODB_URL = 'mongodb://localhost:27017/todo-api'

const connectToDatabase = (
  mongoDatabaseURI = process.env.MONGODB_URI || MONGODB_URL,
) => mongoose.connect(mongoDatabaseURI);

export default connectToDatabase;