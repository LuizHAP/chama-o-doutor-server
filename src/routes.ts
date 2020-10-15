import express from 'express';
import AnswersController from './controllers/AnswersController';

const routes = express.Router();
const answersController = new AnswersController();

routes.post('/api/answers', answersController.create);

export default routes;