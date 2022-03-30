const Employee = require('./employee');

class Manager extends Employee{
    constructor({name, email, id, officeNumber}){
        super({id, email, name})
        this.officeNumber = officeNumber;

        this.role="Manager";
    }

    getOfficeNumber(){
        return this.officeNumber;
    }

    getRole(){
        return this.role;
    }
}


module.exports = Manager