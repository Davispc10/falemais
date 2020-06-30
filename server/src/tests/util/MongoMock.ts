import mongoose from 'mongoose'
import '../../bootstrap'

class MongoMock {
  public async connectDB () {
    if (!process.env.MONGO_URL) {
      throw Error('MongoDb server not initialized!')
    }

    await mongoose.connect(process.env.MONGO_URL, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
      useCreateIndex: true
    })
  }

  public async disconnectDB () {
    await mongoose.disconnect()
  }
}

export default new MongoMock()
