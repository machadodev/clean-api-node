import { LogErrorRepository } from '../../../../data/protocols/db/log-error-repository copy'
import { MongoHelper } from '../helpers/mongo-help'

export class LogMongoRepository implements LogErrorRepository {
  async logError (stack: string): Promise<void> {
    const errorCollection = await MongoHelper.getCollection('errors')
    await errorCollection.insertOne({
      stack,
      date: new Date()
    })
  }
}
