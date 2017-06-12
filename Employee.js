'use strict'

const fs = require('fs')

class Employee {
  constructor (employeeObj) {
    this.name = employeeObj.name
    this.title = employeeObj.title
    this.salary = employeeObj.salary
  }

  promote (title, salary) {
    this.title = title
    this.salary = salary
  }
}

Employee.parseFromFilePath = function (filePath) {
  return new Employee(JSON.parse(fs.readFileSync(filePath, 'utf8')))
}

module.exports = {
  Employee
}
