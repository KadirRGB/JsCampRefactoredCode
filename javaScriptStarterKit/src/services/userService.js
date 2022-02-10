import { users } from "../data/users.js"
import DataError from "../models/dataError.js"

export default class UserService {
    constructor(loggerService) {
        this.errors = []
        this.loggerService = loggerService
        this.users = users;
    }


    listUsers() {
        return this.users
    }

    getUserById(id) {
        return this.users.find(u => u.id === id)
    }

    getUserSorted() {
        return this.users.sort((users1, users2) => {
            if (users1.firstName > users2.firstName) {
                return 1;
            } else if (users1.firstName === users2.firstName) {
                return 0;
            } else {
                return -1
            }
        })
    }

}