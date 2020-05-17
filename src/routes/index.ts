import { Router, request, response } from 'express';

const routes = Router();

routes.get('/', (request, response) => response.json({ message: 'Hello Go Stack' }));

export default routes;
