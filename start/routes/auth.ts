import Route from '@ioc:Adonis/Core/Route'

Route.group(() => {
  Route.get('/login', 'Auth/AuthController.login').as('login')
  Route.post('/login', 'Auth/AuthController.authenticate').as('authenticate')
}).as('auth')
