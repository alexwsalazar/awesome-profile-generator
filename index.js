const Manager = require("./lib/manager");
const Engineer = require("./lib/engineer");
const Intern = require("./lib/intern");
const inquirer = require("inquirer")
const path = require("path")
const fs = require("fs");

const OUTPUT_DIR = path.resolve(__dirname, "output");
const output = path.join(OUTPUT_DIR, "team.html");

const render = require("./utils/generateSampleHTML");

// Empty array for team objects 
const employeeArr = [];

// Manager specific questions for inquier.prompt

const managerRole = {
  type: "input",
  name: "officeNumber",
  message: "what is their office number?",
  validate: answer => {
    if (answer.length< 1){
      return "you need to enter an office number."
    } return true;
  }
};

// engineer specific questions for inquier.prompt

const engineerRole = {
  type: "input",
  message: "what is their Github user name",
  name: "github",
  validate: answer => {
    if (answer.length < 1){
      return "you need to enter their username."
    } return true;
  }
};


// Intern specific questions for inquier.prompt

const internRole = {
  type: "input",
  name: "school",
  message: "what school do they attend?",
  validate: answer => {
    if (answer.length < 1){
      return "you need to enter a school."
    } return true;
  }
};

// General employee questions for inquier.prompt

const employeeQuestions = [
  {
    type: "input",
    name: "name",
    message: "what is the name of the employee?",
    validate: answer => {
      if (answer.length < 1){
        return "you need to enter a name for the employee";
      } return true;
    }
  },
  {
    type: "input",
    name: "id",
    message: "what is their ID?",
    validate: answer => {
      if (answer.length < 1){
        return "you need to enter an ID number for the employee";
      } return true;
    }
  },
  {
    type: "input",
    name: "email",
    message: "what is the email for this employee?",
    validate: answer => {
      if (answer.match(/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/)){
        return true;
      } else{
        return "invalid email. Please enter valid email"
      };
    }
  },
  {
    type: "rawlist",
    name: "role",
    message: "what is the role of the employee?",
    choices: ["Manager", "Engineer", "Intern"]
  }
];

// Question to add another employee

const anotherEmployee = 
{
  type: "confirm",
  name: "another",
  message: "do you want to add another team member?"
};

// Init function to start inquirer.prompt
