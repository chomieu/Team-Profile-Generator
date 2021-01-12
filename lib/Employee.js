// TODO: Write code to define and export the Employee class
const Employee = function (name, role, id, special) {
    // this.name = response.name
    this.role = role
    this.id = id
    this.special = special
    this.getRole = () => {return "Employee"}
    this.getID = () => {return this.id}
    this.getEmail = () => {return this.special}
}

module.exports = Employee;