// TODO: Write code to define and export the Manager class.  HINT: This class should inherit from Employee.
const employee = require("./Employee")

const Manager = function (name, id, email, special) {
    this.officeNumber = special
    this.getRole = () => {return "Manager"}
    this.getOfficeNumber = () => {return this.officeNumber}
}

module.exports = Manager;