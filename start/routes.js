'use strict'

/*
|--------------------------------------------------------------------------
| Routes
|--------------------------------------------------------------------------
|
| Http routes are entry points to your web application. You can create
| routes for different URL's and bind Controller actions to them.
|
| A complete guide on routing is available here.
| http://adonisjs.com/docs/4.1/routing
|
*/

/** @type {typeof import('@adonisjs/framework/src/Route/Manager')} */
const Route = use('Route')

Route.on('/').render('index')

// Grouped
Route.group(() => {
    Route.post('user', 'UserController.add')
    Route.get('user', 'UserController.get')
    Route.get('user/:id', 'UserController.getOne')
    Route.get('user/delete/:id', 'UserController.delete')

    // Login
    // Session
    Route.get('profile', 'AuthController.getProfile').as('profile').middleware(['auth'])
    Route.get('login', 'AuthController.getLogin').as('login')
    Route.post('login', 'AuthController.postLogin').as('login')
    Route.post('logout', 'AuthController.postLogout').as('logout').middleware(['auth'])
    // Auth basic
    Route.get('profile/basic', 'AuthController.getProfile').as('profileBasicAuth').middleware(['auth:basic'])
    // JWT
    Route.post('jwt/login', 'AuthController.postLoginJwt').as('loginJwt')
    Route.post('jwt/refresh', 'AuthController.postRefreshTokenJwt').as('refreshTokenJwt').middleware(['auth:jwt'])
    Route.post('jwt/logout', 'AuthController.postLogoutJwt').as('loginJwt').middleware(['auth:jwt'])
    Route.get('jwt/profile', 'AuthController.getProfileJwt').as('profileJwt').middleware(['auth:jwt'])
    // Personal API Token
    Route.post('api/login', 'AuthController.postLoginApi').as('loginApi')
    Route.post('api/logout', 'AuthController.postLogoutApi').as('logoutApi').middleware(['auth:api'])
    Route.post('api/logoutAll', 'AuthController.postLogoutApiAll').as('logoutApiAll').middleware(['auth:api'])
    Route.get('api/profile', 'AuthController.getProfileApi').as('profileApi').middleware(['auth:api'])
}).prefix('api')
