import { getObjectId } from 'mongo-seeding'

import { TariffProps } from '../../../../app/schemas/Tariff'

const tariffs: TariffProps[] = [
  {
    _id: getObjectId('tariff1'),
    origin: '011',
    destiny: '016',
    tax: 1.90,
    createdAt: new Date(),
    updatedAt: new Date(),
    __v: 0
  },
  {
    _id: getObjectId('tariff2'),
    origin: '016',
    destiny: '011',
    tax: 2.90,
    createdAt: new Date(),
    updatedAt: new Date(),
    __v: 1
  },
  {
    _id: getObjectId('tariff3'),
    origin: '011',
    destiny: '017',
    tax: 1.70,
    createdAt: new Date(),
    updatedAt: new Date(),
    __v: 2
  },
  {
    _id: getObjectId('tariff4'),
    origin: '017',
    destiny: '011',
    tax: 2.70,
    createdAt: new Date(),
    updatedAt: new Date(),
    __v: 3
  },
  {
    _id: getObjectId('tariff5'),
    origin: '011',
    destiny: '018',
    tax: 0.90,
    createdAt: new Date(),
    updatedAt: new Date(),
    __v: 4
  },
  {
    _id: getObjectId('tariff6'),
    origin: '018',
    destiny: '011',
    tax: 1.90,
    createdAt: new Date(),
    updatedAt: new Date(),
    __v: 5
  }
]

export = tariffs;
