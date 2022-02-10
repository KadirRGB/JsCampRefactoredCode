import { users } from "../data/users.js";
import DataError from "../models/dataError.js";
import CustomerValidity from "../validities/customerValidity.js";
import UserService from "./userService.js";

export default class CustomerService extends UserService {
    constructor(loggerService){
        super(loggerService)
        this.customers =[]
    }
    
    loadCustomer() {
        for (const user of users) {
            switch (user.type) {
                case "customer":
                    if (!CustomerValidity(user)) {
                        this.customers.push(user)
                    }
                    break;

                default:
                    this.errors.push(new DataError("Wrong user type. it's not a customer!", user))
                    break;
            }
        }
    }
    
    addCustomer(user){
        switch (user.type) {
            case "customer":
                if (!CustomerValidity(user)) {
                    this.customers.push(user)
                }
                break;
            default:
                this.errors.push(
                    new DataError("This user can not be added. Wrong user type", user))
                break;
        }
        this.loggerService.log(user)
    }

    listCustomers() {
        return this.customers
    }

    getCustomerById(id) {
        return this.customers.find(u => u.id === id)
    }

    getCustomersSorted() {
        return this.customers.sort((customer1, customer2) => {
            if (customer1.firstName > customer2.firstName) {
                return 1;
            } else if (customer1.firstName === customer2.firstName) {
                return 0;
            } else {
                return -1
            }
        })
    }

}