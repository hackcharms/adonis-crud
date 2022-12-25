import BaseSeeder from '@ioc:Adonis/Lucid/Seeder'
import UserFactory from '../factories/UserFactory'

export default class extends BaseSeeder {
  public async run() {
    await UserFactory.createMany(10)
  }
}
