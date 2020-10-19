import { Request, Response } from 'express'
import db from '../database/connection';

export default class AnswersController {
    async create(req: Request, res: Response) {
        const { id_quiz, nomeColaborador, candPrefeito, governoKiko, candPrefKiko, querConhecer } = req.body;

        await db('answers').insert({
            id_quiz, nomeColaborador, candPrefeito, governoKiko, candPrefKiko, querConhecer
        })

        return res.status(201).send();
    }
}