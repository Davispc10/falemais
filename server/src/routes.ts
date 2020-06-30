import { Router } from 'express'

import CalculateCallController from './app/controllers/CalculateCallController'
import DDDController from './app/controllers/DDDController'
import PlanController from './app/controllers/PlanController'
import TariffController from './app/controllers/TariffController'
import CalculateCall from './app/validators/CalculateCall'

const routes = Router()

routes.get('/plans', PlanController.index)
routes.get('/tariffs', TariffController.index)
routes.get('/ddds', DDDController.index)

routes.post('/calculate/call', CalculateCall, CalculateCallController.store)

export default routes
