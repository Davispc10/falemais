import factory from 'factory-girl'

import { Plan } from '../app/schemas/Plan'
import { Tariff } from '../app/schemas/Tariff'

factory.define('Plan1', Plan, {
  description: 'FaleMais 30',
  time: 30,
  add: 10
})

factory.define('Plan2', Plan, {
  description: 'FaleMais 60',
  time: 60,
  add: 10
})

factory.define('Plan3', Plan, {
  description: 'FaleMais 120',
  time: 120,
  add: 10
})

factory.define('Tariff1', Tariff, {
  origin: '011',
  destiny: '016',
  tax: 1.90
})

factory.define('Tariff2', Tariff, {
  origin: '016',
  destiny: '011',
  tax: 2.90
})

factory.define('Tariff3', Tariff, {
  origin: '011',
  destiny: '017',
  tax: 1.70
})

factory.define('Tariff4', Tariff, {
  origin: '017',
  destiny: '011',
  tax: 2.70
})

factory.define('Tariff5', Tariff, {
  origin: '011',
  destiny: '018',
  tax: 0.90
})

factory.define('Tariff6', Tariff, {
  origin: '018',
  destiny: '011',
  tax: 1.90
})

export default factory
