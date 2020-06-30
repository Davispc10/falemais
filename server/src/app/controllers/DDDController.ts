import { Request, Response } from 'express'

import { Tariff } from '../schemas/Tariff'

class DDDController {
  public async index (req: Request, res: Response) {
    const ddds = await Tariff.find({}, { origin: true }).sort('origin').distinct('origin')

    return res.json({ ddds })
  }
}

export default new DDDController()
