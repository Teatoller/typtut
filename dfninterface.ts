
interface IPerson {
    firstName: string
    lastName: string
    sayHi: () => string
}

var customer: IPerson = {
    firstName: "Davis",
    lastName: "kim",
    sayHi: (): string => { return "Hi!" }
}

console.log("Customer Object ")
console.log(customer.firstName)
console.log(customer.lastName)
console.log(customer.sayHi())

var employee: IPerson = {
    firstName: "Jim",
    lastName: "Blakes",
    sayHi: (): string => { return "Hello!!!" }
}

console.log("Employee  Object ")
console.log(employee.firstName);
console.log(employee.lastName);
console.log(employee.sayHi())