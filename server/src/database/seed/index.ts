import { Seeder } from 'mongo-seeding'
import path from 'path'

import '../../bootstrap'

const seeder = new Seeder({
  database: process.env.MONGO_URL
})

const collections = seeder.readCollectionsFromPath(
  path.resolve(__dirname, 'data'),
  {
    extensions: ['ts'],
    transformers: [
      Seeder.Transformers.replaceDocumentIdWithUnderscoreId
    ]
  }
)

seeder
  .import(collections)
  .then(() => {
    console.log('Success')
  })
  .catch(err => {
    console.log('Error', err)
  })
