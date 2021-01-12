// TODO: Write code to define and export the Engineer class.  HINT: This class should inherit from Employee.
const employee = require("./Employee")

const Engineer = function (name, id, email, special) {
    this.github = special
    this.getRole = () => {return "Engineer"}
    this.getGithub = () => {return this.github}
}

module.exports = Engineer;