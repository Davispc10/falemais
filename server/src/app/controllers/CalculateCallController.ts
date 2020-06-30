import { Request, Response } from 'express'

import { Plan } from '../schemas/Plan'
import { Tariff } from '../schemas/Tariff'
import CalculateCallValueService from '../services/CalculateCallValueService'

class CalculateCallController {
  public async store (req: Request, res: Response) {
    const { origin, destiny, time, planId } = req.body

    const plan = await Plan.findOne({ _id: planId })

    if (!plan) {
      return res.status(400).json({ error: 'Plan not found' })
    }

    const tariff = await Tariff.findOne({ origin, destiny })

    if (!tariff) {
      return res.status(200).json({
        calculatedCallWithPlan: '-',
        calculatedCallWithoutPlan: '-'
      })
    }

    const calculateCallValueService = new CalculateCallValueService()

    const calculatedCall = calculateCallValueService.run(tariff, plan, time)

    return res.json({
      calculatedCallWithPlan: calculatedCall.formattedCallValueWithPlan,
      calculatedCallWithoutPlan: calculatedCall.formattedCallValueWithoutPlan
    })
  }
}

export default new CalculateCallController()
