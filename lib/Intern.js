// TODO: Write code to define and export the Intern class.  HINT: This class should inherit from Employee.
const employee = require("./Employee")

const Intern = function (name, id, email, school) {
    this.school = school 
    this.getSchool = () => {this.school}
}

module.exports = Intern;