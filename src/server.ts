import express from 'express';
import routes from './routes';

const app = express();

app.use(routes);

// app.get('/', (request, response) => {
//   response.json({ message: 'Helldso World' });
// });

app.listen(3333, () => {
	console.log('Server starded on port 3333 xD');
});
