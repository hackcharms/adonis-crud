import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import UserFactory from 'Database/factories/UserFactory'
// import { inspect } from '@ioc:Adonis/Core/Helpers'
// import Hash from '@ioc:Adonis/Core/Hash'

export default class HomeController {
  public async home({ view, params, request, response }: HttpContextContract) {
    const user = await UserFactory.make()
    console.log(user)
    response.send(user)
    return await view.render('pages.home', { params, request })
  }
}
