import request from 'supertest'

import app from '../../app'
import { Plan, PlanProps } from '../../app/schemas/Plan'
import { Tariff, TariffProps } from '../../app/schemas/Tariff'
import factory from '../factories'
import MongoMock from '../util/MongoMock'

interface ICalculatedCall {
  calculatedCallWithPlan: string,
  calculatedCallWithoutPlan: string
}

describe('CalculateCallValue', () => {
  beforeAll(async () => {
    await MongoMock.connectDB()
  })

  afterAll(async () => {
    await MongoMock.disconnectDB()
  })

  beforeEach(async () => {
    await Plan.deleteMany({})
    await Tariff.deleteMany({})
  })

  it('should be able to calculate call value with time less than plan', async () => {
    const plan = await Plan.create(await factory.attrs('Plan1') as PlanProps)
    const tariff = await Tariff.create(await factory.attrs('Tariff1') as TariffProps)

    const data = {
      origin: tariff.origin,
      destiny: tariff.destiny,
      time: 20,
      planId: plan._id
    }

    const calculatedCall: ICalculatedCall = await (await request(app).post('/calculate/call').send(data)).body

    expect(calculatedCall).toEqual(
      expect.objectContaining({
        calculatedCallWithPlan: 'R$ 0,00',
        calculatedCallWithoutPlan: 'R$ 38,00'
      })
    )
  })

  it('should be able to calculate call value with time more than plan', async () => {
    const plan = await Plan.create(await factory.attrs('Plan1') as PlanProps)
    const tariff = await Tariff.create(await factory.attrs('Tariff1') as TariffProps)

    const data = {
      origin: tariff.origin,
      destiny: tariff.destiny,
      time: 40,
      planId: plan._id
    }

    const calculatedCall: ICalculatedCall = await (await request(app).post('/calculate/call').send(data)).body

    expect(calculatedCall).toEqual(
      expect.objectContaining({
        calculatedCallWithPlan: 'R$ 20,90',
        calculatedCallWithoutPlan: 'R$ 76,00'
      })
    )
  })

  it('should not be able to calculate call value without a field in body request', async () => {
    const plan = await Plan.create(await factory.attrs('Plan1') as PlanProps)
    const tariff = await Tariff.create(await factory.attrs('Tariff1') as TariffProps)

    const data = {
      destiny: tariff.destiny,
      time: 40,
      planId: plan._id
    }

    const response = await request(app).post('/calculate/call').send(data)

    expect(response.status).toBe(400)
  })

  it('should not be able to calculate call value with a wrong planId', async () => {
    const tariff = await Tariff.create(await factory.attrs('Tariff1') as TariffProps)

    const data = {
      planId: 'd3f619e3c0c6ae79ad9c783d',
      origin: tariff.origin,
      destiny: tariff.destiny,
      time: 40
    }

    const response = await request(app).post('/calculate/call').send(data)

    expect(response.status).toBe(400)
  })

  it('should not be able to calculate call value with a wrong origin and destiny tariff', async () => {
    const plan = await Plan.create(await factory.attrs('Plan1') as PlanProps)

    const data = {
      planId: plan._id,
      origin: '011',
      destiny: '011',
      time: 40
    }

    const calculatedCall: ICalculatedCall = await (await request(app).post('/calculate/call').send(data)).body

    expect(calculatedCall).toEqual(
      expect.objectContaining({
        calculatedCallWithPlan: '-',
        calculatedCallWithoutPlan: '-'
      })
    )
  })
})
