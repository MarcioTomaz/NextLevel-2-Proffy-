import express from 'express';
import ClassesController from './controllers/ClassesController';
import ConnectionsControllers from './controllers/ConnectionsControllers';


const routes = express.Router();
const classesController = new ClassesController();
const connectionsController = new ConnectionsControllers();

routes.get('/classes', classesController.index);
routes.post('/classes', classesController.create);

routes.get('/connections', connectionsController.index)
routes.post('/connections', connectionsController.create)

export default routes;
