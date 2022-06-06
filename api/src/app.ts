// IMPORT MODULES
import express, { Express } from 'express';
import dotenv from 'dotenv';
import morgan from 'morgan';

dotenv.config();
const port = process.env.PORT;

// INIT APP
const app:Express = express();

// APP SETTINGS
app.set('port', port)

// APP MIDDLEWARES
app.use(morgan('dev'))

// APP ROUTES

// EXPORT APP
export default app

