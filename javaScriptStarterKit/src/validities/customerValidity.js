
export default class CustomerValidity {
    constructor(user) {   
            let requiredFields = "id firstName lastName age city creditCardNumber".split(" ")
            let hasErrors = false
            for (const field of requiredFields) {
                if (!user[field]) {
                    hasErrors = true
                    this.errors.push(
                        new DataError(`Validation problem. ${field} is required`, user))
                }
            }
            if (Number.isNaN(Number.parseInt(+user.age))) {
                hasErrors = true
                this.errors.push(new DataError(`Validation problem. ${user.age} is not a number`, user))
            }
                
            return hasErrors
    }
}
