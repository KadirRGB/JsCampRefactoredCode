import { BaseLogger, ElasticLogger, MongoLogger } from "../crossCuttingConcerns/logging/logger.js"
import Customer from "../models/customer.js"
import Employee from "../models/employee.js"
import User from "../models/user.js"
import CustomerService from "../services/customerService.js"
import EmployeeService from "../services/employeeService.js"
import UserService from "../services/userService.js"

console.log("User component yüklendi")

let logger1 = new MongoLogger()
let userService = new UserService(logger1)
let customerService = new CustomerService(logger1)
let employeeService = new EmployeeService(logger1)

customerService.loadCustomer()
employeeService.loadEmployee()

let customerToAdd = new Customer(1,"engin","demiroğ","Ankara","30",100000);
customerToAdd.type = "customer"
let employeeToAdd = new Employee(2,"kadir","sesiz","mardin","20",4350);
employeeToAdd.type = "employee"



customerService.addCustomer(customerToAdd)
employeeService.addEmployee(employeeToAdd)

console.log(customerService.customers)
console.log(employeeService.employees)
console.log(userService.errors)
console.log(customerService.getCustomersSorted())
