// TODO: Write code to define and export the Intern class.  HINT: This class should inherit from Employee.
const employee = require("./Employee")

const Manager = function (name, id, email, office) {
    this.office = office
    this.getRole = () => {return "Manager"}
    this.getOfficeNumber = () => {return this.office}
}

module.exports = Manager;