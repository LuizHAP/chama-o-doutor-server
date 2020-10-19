import { Request, Response } from 'express'
import db from '../database/connection';

export default class AnswersController {
    async create(req: Request, res: Response) {
        try {
            const { id_quiz, nomeColaborador, candPrefeito, governoKiko, candPrefKiko, querConhecer } = req.body;

            await db('answers').insert({
                id_quiz, nomeColaborador, candPrefeito, governoKiko, candPrefKiko, querConhecer
            })
        } catch (e) {
            console.log(e);
            return res.status(400).json({
                error: 'Unexpected error while creating new class'
            })
        }

        return res.status(201).send();
    }
}