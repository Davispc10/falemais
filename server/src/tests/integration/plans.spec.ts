import request from 'supertest'

import app from '../../app'
import { Plan, PlanProps } from '../../app/schemas/Plan'
import factory from '../factories'
import MongoMock from '../util/MongoMock'

describe('Plan', () => {
  beforeAll(async () => {
    await MongoMock.connectDB()
  })

  afterAll(async () => {
    await MongoMock.disconnectDB()
  })

  beforeEach(async () => {
    await Plan.deleteMany({})
  })

  it('should be able to list all', async () => {
    await Plan.create(await factory.attrs('Plan1') as PlanProps)
    await Plan.create(await factory.attrs('Plan2') as PlanProps)
    await Plan.create(await factory.attrs('Plan3') as PlanProps)

    const plans: PlanProps[] = await (await request(app).get('/plans')).body

    expect(plans).toEqual(
      expect.arrayContaining([
        expect.objectContaining({
          time: 30,
          add: 10,
          description: 'FaleMais 30'
        }),
        expect.objectContaining({
          time: 60,
          add: 10,
          description: 'FaleMais 60'
        }),
        expect.objectContaining({
          time: 120,
          add: 10,
          description: 'FaleMais 120'
        })
      ])
    )
  })
})
