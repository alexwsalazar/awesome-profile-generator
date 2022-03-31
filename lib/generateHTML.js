const path = require("path");
const fs = require("fs");

function generate(data){
   
    function interCard(data){
        return`
  <div class="card employee-card">
        <div class="card-header">
            <h2 class="card-title">${ data.getName() }</h2>
            <h3 class="card-title"><i class="fas fa-user-graduate mr-2"></i>${ data.getRole() }</h3>
        </div>
        <div class="card-body">
            <ul class="list-group">
                <li class="list-group-item">ID: ${ data.id }</li>
                <li class="list-group-item">Email: <a href="mailto:${ data.email }">${ data.email }</a></li>
                <li class="list-group-item">School: ${ data.school }</li>
            </ul>
        </div>
    </div>
        `;}
    function engineerCard(data){
        return`
            <div class="card employee-card">
                <div class="card-header">
                    <h2 class="card-title">${data.getName()}</h2>
                    <h3 class="card-title"><i class="fas fa-glasses mr-2"></i>${data.getRole()}</h3>
                </div>
                <div class="card-body">
                    <ul class="list-group">
                        <li class="list-group-item">ID: ${ data.id }</li>
                        <li class="list-group-item">Email: <a href="mailto:${ data.email }">${data.email}</a></li>
                        <li class="list-group-item">GitHub: <a href="https://github.com/${ data.github }" target="_blank" rel="noopener noreferrer">${ data.github }</a></li>
                    </ul>
                </div>
            </div>
        `;} 

     function managerCard(data){
         return`
         <div class="card employee-card">
    <div class="card-header">
        <h2 class="card-title">${ data.getName()}</h2>
        <h3 class="card-title"><i class="fas fa-mug-hot mr-2"></i>${ data.getRole() }</h3>
    </div>
    <div class="card-body">
        <ul class="list-group">
            <li class="list-group-item">ID: ${ data.id }</li>
            <li class="list-group-item">Email: <a href="mailto:${ data.email }">${ data.email }</a></li>
            <li class="list-group-item">Office number: ${ data.officeNumber }</li>
        </ul>
    </div>
</div>
         `;}   

  
         const cardArray = [];
         cardArray.push(data
             .filter(employee => employee.getRole() === "Manager")
             .map(manager => managerCard(manager))
         );
         cardArray.push(data
             .filter(employee => employee.getRole() === "Engineer")
             .map(engineer => engineerCard(engineer))
             .join("")
         );
         cardArray.push(data
             .filter(employee => employee.getRole() === "Intern")
             .map(intern => interCard(intern))
             .join("")
         );
         return cardArray.join("");



    
}





module.exports = data => {
    return`
    <!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <meta http-equiv="X-UA-Compatible" content="ie=edge" />
    <title>My Team</title>
    <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css"/>
    <script src="https://kit.fontawesome.com/c502137733.js"></script>
</head>

<body>
    <div class="container-fluid">
        <div class="row">
            <div class="col-12 jumbotron mb-3 team-heading">
                <h1 class="text-center">My Team</h1>
            </div>
        </div>
    </div>
    <div class="container">
        <div class="row">
            <div class="team-area col-12 d-flex justify-content-center">
                ${ generate(data) }
            </div>
        </div>
    </div>
</body>

</html>
    `};









