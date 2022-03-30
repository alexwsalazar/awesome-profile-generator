const Intern = require('./employee');

class Intern extends Employee{
    constructor({name, email, id, school}){
        super({id, email, name})
        this.school = school

        this.role="Intern";
    }

    getSchool(){
       return this.school
    }

    getRole(){
        return this.role
    }

}


module.exports= Intern