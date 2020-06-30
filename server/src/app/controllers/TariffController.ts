import { Request, Response } from 'express'

import { Tariff } from '../schemas/Tariff'

class TariffController {
  public async index (req: Request, res: Response) {
    const tariffs = await Tariff.find({}, { origin: true, destiny: true, tax: true })

    return res.json(tariffs)
  }
}

export default new TariffController()
