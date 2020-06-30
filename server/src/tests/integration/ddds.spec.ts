import request from 'supertest'

import app from '../../app'
import { Tariff, TariffProps } from '../../app/schemas/Tariff'
import factory from '../factories'
import MongoMock from '../util/MongoMock'

describe('DDDs', () => {
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
    await Tariff.create(await factory.attrs('Tariff4') as TariffProps)
    await Tariff.create(await factory.attrs('Tariff5') as TariffProps)
    await Tariff.create(await factory.attrs('Tariff6') as TariffProps)

    const { ddds } = await (await request(app).get('/ddds')).body

    expect(ddds).toEqual(
      expect.arrayContaining(['011', '016', '017', '018'])
    )
  })
})
