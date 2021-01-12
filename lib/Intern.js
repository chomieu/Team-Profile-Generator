// TODO: Write code to define and export the Intern class.  HINT: This class should inherit from Employee.
const employee = require("./Employee")

const Intern = function (name, id, email, special) {
    this.school = special
    this.getRole = () => {return "Intern"}
    this.getSchool = () => {return this.school}
}

module.exports = Intern;