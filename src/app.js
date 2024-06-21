import express from 'express';

const app = express();

app.use(express.static('public'));

app.get('/', (_, res) => {
	res.send('Hello World!');
});

app.get('/about', (_, res) => {
	res.send('Это простое приложение на Express.js');
});

app.get('/*', (_, res) => {
	res.status(404).send('Страница не найдена');
});

app.listen(3000, '0.0.0.0', () => {
	console.log('Listening on port 3000');
});
