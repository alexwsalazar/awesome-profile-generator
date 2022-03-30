const Employee = require('./employee');

class Engineer extends Employee {
    constructor(name, email,id,github){
        super({id, email, name})
        this.github = github

        this.role="Engineer";
    }

    getGithub(){
        return this.github
    }

    getRole(){
        return this.role;
    }

}

module.exports = Engineer;


