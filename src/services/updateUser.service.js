import users from '../database';

const updatedUserService = (uuid, name, email) => {

    const updatedUser = {
        uuid,
        name,
        email,
    }

    const userIndex = users.findIndex(element => element.uuid === uuid)

    if(userIndex === -1 ){
        return "User not found"
    }

    users[userIndex] = {...users[userIndex], ...updatedUser}

    return users[userIndex]

}
export default updatedUserService;