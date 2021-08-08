/*Imports*/
import express, { request, response } from 'express';
import path from 'path';
import apiRouter from './routes/apiRouter.js';

/*Declaración puerto y app*/
const puerto = 8080;
const app = express();

/*Inicio App*/
const server = app.listen(puerto, () =>
console.log('Server up en puerto ', puerto)
);

/*Manejo de errores*/
server.on('error', (err) => {
    console.log('ERROR => ', err);
});

const publicPath = path.resolve(__dirname, '../public');
app.use(express.static(publicPath));

app.set('view engine', 'ejs');
app.set('views', './views');

app.use(express.json());
app.use(express.urlencoded({extended: true}));

app.use('/productos/', apiRouter);
