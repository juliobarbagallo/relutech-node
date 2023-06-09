import Role from '../models/Role'

export const createRoles = async () => {
    console.log("creating roles...")
    try {
        const count = await Role.estimatedDocumentCount();

        if (count > 0) {
            console.log("count > 0")
            return
        }

        const values = await Promise.all([
            new Role({name: 'admin'}).save(),
            new Role({name: 'developer'}).save()
        ])

        console.log(values)
    } catch (e) {
        console.log(e)
    }
    
}