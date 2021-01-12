// TODO: Write code to define and export the Employee class
const Employee = function (name, id, email, special) {
    this.name = name
    this.role = special
    this.id = id
    this.email = email
    this.getName = () => {return this.name}
    this.getRole = () => {return "Employee"}
    this.getId = () => {return this.id}
    this.getEmail = () => {return this.email}
}

module.exports = Employee;