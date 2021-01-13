// Define libraries and file paths
const inquirer = require("inquirer");
const fs = require("fs");
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");
const Manager = require("./lib/Manager");
const render = require("./lib/htmlRenderer");
const path = require("path");
const OUTPUT_DIR = path.resolve(__dirname, "output");
const outputPath = path.join(OUTPUT_DIR, "team.html");

// Stores team members added
const team = [];

// An array of questions to inquire
const questions = [
    {
        type: "input",
        name: "name",
        message: "Name:"
    }, {
        type: "input",
        name: "id",
        message: "ID Number:"
    }, {
        type: "input",
        name: "email",
        message: "Email:"
    }, {
        type: "list",
        name: "role",
        message: "Role:",
        choices: ["Engineer", "Intern", "Manager"]
    }, {
        type: "input",
        name: "special",
        message: function (response) {
            switch (response.role) {
                case "Engineer":
                    return "Github:"
                case "Intern":
                    return "School:"
                case "Manager":
                    return "Office Number:"
            }
        }
    }]

// Confirms whether user would like to add a new team member (Recursive Function)
// If yes, calls the addMember function that eventually sends user back here 
// Otherwise, checks for the output folder and calls the writeHTML function
function buildTeam() {
    inquirer.prompt({
        type: "confirm",
        name: "add",
        message: "Add new team member?"
    }).then(({ add }) => {
        switch (add) {
            case true:
                addMember();
                break;
            case false:
                if (!fs.existsSync(OUTPUT_DIR)) {
                    fs.mkdir("output", () => {
                        writeHTML()
                    })
                } else {
                    writeHTML()
                }
            }
        })
    }

// Prompts user for inputs, then creates a new employee based on selected role
function addMember() {
    inquirer.prompt(questions)
        .then(response => {
            const parameters = [response.name, response.id, response.email, response.special]
            switch (response.role) {
                case "Engineer":
                    team.push(new Engineer(...parameters));
                    break;
                case "Intern":
                    team.push(new Intern(...parameters));
                    break;
                case "Manager":
                    team.push(new Manager(...parameters));
                    break;
            }
            buildTeam()
        })
}

// Writes to team.html file in the output folder using HTML returned from the render function
function writeHTML() {
    fs.writeFile(outputPath, render(team), (err) => {
        err ? console.error(err) : console.log("success")
    })
}

// Initializes the app
buildTeam()