import request from 'supertest'

import app from '../../app'
import { Tariff, TariffProps } from '../../app/schemas/Tariff'
import factory from '../factories'
import MongoMock from '../util/MongoMock'

describe('Tariff', () => {
  beforeAll(async () => {
    await MongoMock.connectDB()
  })

  afterAll(async () => {
    await MongoMock.disconnectDB()
  })

  beforeEach(async () => {
    await Tariff.deleteMany({})
  })

  it('should be able to list all', async () => {
    await Tariff.create(await factory.attrs('Tariff1') as TariffProps)
    await Tariff.create(await factory.attrs('Tariff2') as TariffProps)
    await Tariff.create(await factory.attrs('Tariff3') as TariffProps)

    const tariffs: TariffProps[] = await (await request(app).get('/tariffs')).body

    expect(tariffs).toEqual(
      expect.arrayContaining([
        expect.objectContaining({
          origin: '011',
          destiny: '016',
          tax: 1.90
        }),
        expect.objectContaining({
          origin: '016',
          destiny: '011',
          tax: 2.90
        }),
        expect.objectContaining({
          origin: '011',
          destiny: '017',
          tax: 1.70
        })
      ])
    )
  })
})
