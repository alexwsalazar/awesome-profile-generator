class Employee {
    constructor(name, email, id){
        this.id = id;
        this.email =email;
        this.name = name;

    }

    getName(){
      return this.name;
    }

    getId(){
     return this.id;
    }

    getEmail(){
      return this.email
    }

   getRole(){
     return "Employee"
   }
    
}

module.exports = Employee;