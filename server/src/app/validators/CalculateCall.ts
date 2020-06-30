import { Request, Response, NextFunction } from 'express'
import * as Yup from 'yup'

export default async (req: Request, res: Response, next: NextFunction): Promise<Response | void> => {
  try {
    const schema = Yup.object().shape({
      origin: Yup.string().required(),
      destiny: Yup.string().required(),
      time: Yup.number().required(),
      planId: Yup.string().required()
    })

    await schema.validate(req.body, { abortEarly: false })

    return next()
  } catch (err) {
    return res.status(400).json({ error: 'Validation fails', messages: err.inner })
  }
}
