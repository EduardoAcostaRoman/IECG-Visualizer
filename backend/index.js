import express from 'express';
import mongoose from 'mongoose';
import bodyParser from 'body-parser';
import routes from './routes/soccerRoutes';
import cors from 'cors';

// node express local server
const app = express();
const PORT = 3001;

// mongoose connection
mongoose.Promise = global.Promise;
mongoose.connect('mongodb://localhost/', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});
