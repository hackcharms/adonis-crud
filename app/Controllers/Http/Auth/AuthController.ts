// import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'

export default class AuthController {
  protected redirectTo = '/dashboard'

  public async login({ view }) {
    return view.render('pages.auth.login')
  }

  public async authenticate({ auth, request, response }) {
    const email = request.input('email')
    const password = request.input('password')
    console.log(email, password)
    try {
      await auth.use('web').attempt(email, password)
      response.redirect(this.redirectTo)
    } catch {
      return response.badRequest('Invalid credentials')
    }
  }
}
