import express, { response } from 'express';
import ClassesController from './controllers/ClassesController';
import ConnectionsController from './controllers/ConnectionsController';

const routes = express.Router();
const classesController = new ClassesController();
const connectionsController = new ConnectionsController();

routes.post('/classes', classesController.createClass);

routes.get('/classes', classesController.listClass);

routes.post('/connections', connectionsController.createConnection);

routes.get('/connections', connectionsController.listConnection);

export default routes;