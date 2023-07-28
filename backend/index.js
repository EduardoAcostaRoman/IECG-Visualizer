import express from 'express';
import mongoose from 'mongoose';
import bodyParser from 'body-parser';
import routes from './routes/userRoutes';
import cors from 'cors';

// node express local server
const app = express();
const PORT = 4000;

// mongoose connection
mongoose.Promise = global.Promise;
mongoose.connect('mongodb://127.0.0.1/iecgDB', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

// body-parser setup
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

// CORS setup
app.use(cors());

// establishes the routes
routes(app);

app.get('/', (req, res) => res.send(`Our app is running on the ${PORT} port`));

app.listen(PORT, () =>
  console.log(`Your app server is running on the ${PORT} port`)
);
