import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
// import { inspect } from '@ioc:Adonis/Core/Helpers'

export default class HomeController {
  public async home({ view, params, request }: HttpContextContract) {
    return await view.render('home', { params, request })
  }
}
