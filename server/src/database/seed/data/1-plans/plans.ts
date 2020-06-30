import { getObjectId } from 'mongo-seeding'

import { PlanProps } from '../../../../app/schemas/Plan'

const plans: PlanProps[] = [
  {
    _id: getObjectId('plan1'),
    description: 'FaleMais 30',
    time: 30,
    add: 10,
    createdAt: new Date(),
    updatedAt: new Date(),
    __v: 0
  },
  {
    _id: getObjectId('plan2'),
    description: 'FaleMais 60',
    time: 60,
    add: 10,
    createdAt: new Date(),
    updatedAt: new Date(),
    __v: 1
  },
  {
    _id: getObjectId('plan3'),
    description: 'FaleMais 120',
    time: 120,
    add: 10,
    createdAt: new Date(),
    updatedAt: new Date(),
    __v: 2
  }
]

export = plans;
