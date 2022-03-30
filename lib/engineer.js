const Employee = require('./employee');

class Engineer extends Employee {
    constructor(name, email,id,github){
        super(id, email, name)
        this.github = github

       
    }

    getGithub(){
        return this.github
    }

    getRole(){
        return "Engineer";
    }

}

module.exports = Engineer;


