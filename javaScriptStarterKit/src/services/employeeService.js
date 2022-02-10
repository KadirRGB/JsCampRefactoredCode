import DataError from "../models/dataError.js";
import EmployeeValidity from "../validities/employeeValidity.js";
import UserService from "./userService.js";
import { users } from "../data/users.js"


export default class EmployeeService extends UserService {
    constructor(loggerService){
        super(loggerService)
        this.employees =[]
    }
    loadEmployee() {
        for (const user of users) {
            switch (user.type) {
                case "employee":
                    if (!EmployeeValidity(user)) {
                        this.employees.push(user)
                    }
                    break;

                default:
                    this.errors.push(new DataError("Wrong user type. it's not an employee!", user))
                    break;
            }
        }
    }
    addEmployee(user) {
        switch (user.type) {
            case "employee":
                if (!EmployeeValidity(user)) {
                    this.employees.push(user)
                }
                break;
            default:
                this.errors.push(
                    new DataError("This user can not be added. Wrong user type", user))
                break;
        }
        this.loggerService.log(user)
    }
    listEmployee() {
        return this.employees
    }

    getEmployeeById(id) {
        return this.employees.find(u => u.id === id)
    }

    getEmployeeSorted() {
        return this.employees.sort((employee1, employee2) => {
            if (employee1.firstName > employee2.firstName) {
                return 1;
            } else if (employee1.firstName === employee2.firstName) {
                return 0;
            } else {
                return -1
            }
        })
    }
}