import { Request, Response } from 'express'

import { Plan } from '../schemas/Plan'

class PlanController {
  public async index (req: Request, res: Response) {
    const plans = await Plan.find({}, { _id: true, description: true, time: true, add: true })

    return res.json(plans)
  }
}

export default new PlanController()
