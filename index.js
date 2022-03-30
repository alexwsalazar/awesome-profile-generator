const Manager = require("./lib/manager");
const Engineer = require("./lib/engineer");
const Intern = require("./lib/intern");
const inquirer = require("inquirer")
const path = require("path")
const fs = require("fs");

const OUTPUT_DIR = path.resolve(__dirname, "output");
const output = path.join(OUTPUT_DIR, "team.html");

const render = require("./lib/generateHTML");

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
const init = async () => {
  console.log('Please answer the following questions to build your team.');

  const generalQ = await inquirer.prompt(employeeQuestions);
  // create object for classes 
  const {name, id, email, role} = generalQ
}
 //Conditional statement to get to role specific questions

 if (role === "Manager"){
   const managerQ = await inquirer.prompt(managerRole);
   const office = managerQ.officeNumber;

   // makes object for manager

   const manager = new Manager(name, id, email, office);
   employeeArr.push(manager);
 } else if (role === "Engineer"){
   const engineerQ = await inquirer.prompt(engineerRole);
   const github = engineerQ.github;

   // makes object for engineer

   const engineer = new Engineer(name, id, email, github);
   employeeArr.push(engineer);
 } else if  (role === "Intern"){
   const internQ = await inquirer.prompt(internRole);
   const school = internQ.school;

  ///  makes object for intern 
   const intern = new Intern(name, email, id, school);
   employeeArr.push(intern);
  
 }

 // promt to add more employees 
 const newEmployee = await inquirer.prompt(anotherEmployee);
 const yesOrno = newEmployee.another;

 if (yesOrno){
   init();
 } else {
   console.log('you have succesfully built your team!');
   console.log(employeeArr);
   //after the user has input all employees desired, call the 'generate' function
   // and pass in an array with all employee objects

   const teamForm = generate(employeeArr);
   ///create an html file ising the html returned from the "generate"  function using the variable 
   /// "outputPath above. "

   fs.writeFile(outputPath, teamForm, error =>{
     if (error) throw error;
   })
 }