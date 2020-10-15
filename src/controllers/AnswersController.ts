import { Request, Response } from 'express'
import db from '../database/connection';

export default class AnswersController {
    async create(req: Request, res: Response) {
        const { user_id } = req.body;

        await db('answers').insert({
            user_id,
        })

        return res.status(201).send();
    }
}