'use strict'

const User = use('App/Models/User')
const Helpers = use('Helpers')

class UserController {
    async add({ request, response }) {
        // Convert Promisify
        const saveDataProm = Helpers.promisify(saveData)        
        const data = await saveDataProm(request.all())
        response.send(data)
    }

    async get() {
        return User.all()
    }

    async getOne({ params, response }) {
        // params
        const { id } = params

        return User.find(id)
    }

    async delete({ params, response }) {
        const { id } = params

        const user = await User.find(id)
        await user.delete()
    }
}

// Callback function
let saveData = (value, cb) => {
    let user;
    if (value.id == null || value.id == undefined) {
        user = new User;
    } else {
        user = User.findBy('id', value.id);
    }
    user.username = value.username
    user.email = value.email
    user.password = value.password

    try {
        user.save()
        cb(null, {'msg': 'Success'})
    } catch (err) {
        cb(null, {'msg': 'Failed'})
    }
}

module.exports = UserController
