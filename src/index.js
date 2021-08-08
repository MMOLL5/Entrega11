/*Imports*/
import express, { request, response } from 'express';
import path from 'path';
import apiRouter from './routes/apiRouter.js';
import handlebars from 'express-handlebars';

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

const layoutFolderPath = path.resolve(__dirname, '../views/layouts'); 
const defaultLayerPath = path.resolve(__dirname, '../views/layouts/index.handlebars');


app.set('view engine', 'handlebars');
app.set('views', './views');

app.engine('handlebars', handlebars({
    layoutsDir: layoutFolderPath,
    defaultLayout: defaultLayerPath,
}));

app.use(express.json());
app.use(express.urlencoded({extended: true}));

app.use('/productos/', apiRouter);
