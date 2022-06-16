import express from 'express';
import config from './config';
import bookRoutes from './routes/booksRoutes';
const app = express();
app.use(express.json());
app.use(express.urlencoded({extended: true}));

// setting for port
app.set('port', config.port);
app.use(bookRoutes);
// app.use(express.json);
// app.use(express.urlencoded({ extended:false}));

export default app