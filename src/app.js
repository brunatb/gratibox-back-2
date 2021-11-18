import express from 'express';
import cors from 'cors';
import register from './controllers/register.js';
import login from './controllers/login.js';

export const app = express();

app.use(cors());
app.use(express.json());

app.post('/register', register);
app.post('/login', login);
