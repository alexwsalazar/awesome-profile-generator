// TODO: Include packages needed for this application
const inquirer = require(inquirer);
const fs = require('fs');
const generateSampleHTML = require("./utils/generateSampleHTML")



function init(){
inquirer.prompt({
  type:"loop",
  name: "items",
  message: "add another employee?",
  questions:[{      
      type: 'input',
      message: 'What is your name?',
      name: 'name',
    },
    {
      type: 'input',
      message: 'what is your email?',
      name: 'email',
    },
    {
      type: 'input',
      message: 'what is your id',
      name: 'id',
    },
    {
        type: 'input',
        message: 'What is your office numner?',
        name: 'office number',
    },
    {
        type: 'input',
        message: 'what is your github username?',
        name: 'github',
    },
    {
        type: 'input',
        message: 'what school did you attend?',
        name: 'school',
      },
  ]
  .then((response) => {

    fs.writeFileSync('Sample.html', generateSampleHTML(response))
    
  }),
// }
// function generateSampleHTML(data) {
//   return `

// `;
},


module.exports = generateSampleHTML());
// Function call to initialize app
init();
}