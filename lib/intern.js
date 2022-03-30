const Employee = require('./employee');

class Intern extends Employee{
    constructor(name, email, id, school){
        super({id, email, name})
        this.school = school

      
    }

    getSchool(){
       return this.school
    }

    getRole(){
        return 'Intern'
    }

}


module.exports= Intern