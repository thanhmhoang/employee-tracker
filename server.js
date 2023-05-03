// Import and require
const inquirer = require("inquirer");
const mysql = require('mysql2');
const { col } = require("sequelize");


// Connect to database
const db = mysql.createConnection(
    {
      host: '127.0.0.1',
      // MySQL username,
      user: 'root',
      // MySQL password
      database: 'business_db'
    },
    console.log(`Connected to the business_db database.`)
  );

db.connect(function(err){
    console.log(err)
})

// Start the prompt functions
function menuPrompt() {
    inquirer.prompt({
            type: 'list',
            name: 'menu',
            message: 'Please select an option from the menu!',
            choices: ['View All Departments', 'View All Roles', 'View All Employees', 'Add A Department', 'Add A Role', 'Add An Employee', 'Update An Employee Role', 'Exit'], 
    }) .then (function(res){
        if (res.menu === 'View All Departments'){
        viewAllDepartments()    
        }
        if (res.menu === 'View All Roles'){
        viewAllRoles()    
        }
        if (res.menu === 'View All Employees'){
        viewAllEmployees()    
        }
        if (res.menu === 'Add A Department'){
        addDepartment()    
        }
        if (res.menu === 'Add A Role'){
        addRole()    
        }
        if (res.menu === 'Add An Employee'){
        addEmployee()    
        }
        if (res.menu === 'Update An Employee Role'){
        updateRole()    
        }
        if (res.menu === 'Exit'){
        process.exit()   
        }
    })
}
function viewAllDepartments() {
    db.query('SELECT * FROM department', function(err, data){
        console.table(data)
        menuPrompt()
    })
}

function viewAllRoles() {
    db.query('SELECT * FROM role', function(err, data){
        console.table(data)
        menuPrompt()
    })
}

function viewAllEmployees() {
    db.query('SELECT * FROM employee', function(err, data){
        console.table(data)
        menuPrompt()
    })
}

function addDepartment() {
    inquirer.prompt({
        type: 'input',
        name: 'department',
        message: 'What department would you like to add?',
    }) .then (function(res){
        db.query('INSERT INTO department (name)values(?)', [res.department], function(err, data){
            console.table(data)
            menuPrompt()
        })
    })
}

function addRole() {
    inquirer.prompt({
        type: 'input',
        name: 'role',
        message: 'What role would you like to add?',
    }) .then (function(res){
        db.query('INSERT INTO role (name)values(?)', [res.role], function(err, data){
            console.table(data)
            menuPrompt()
        })
    })
}

function addEmployee() {
    inquirer.prompt([{
        type: 'input',
        name: 'id',
        message: 'What is their employee ID?',
    },
    {
        type: 'input',
        name: 'first_name',
        message: 'What is their first name?',
    },
    {
        type: 'input',
        name: 'last_name',
        message: 'What is their last name?',
    },
    {
        type: 'input',
        name: 'manager_id',
        message: 'What is their manager ID?',
    },
]) .then (function(res){
        db.query('INSERT INTO employee (first_name, last_name, role_id, manager_id)values(?,?,?,?)', [res.first_name, res.last_name, res.role_id, res.manager_id], function(err, data){
            console.table(data)
            menuPrompt()
        })
    })
}

function updateRole() {
    inquirer.prompt([{
        type: 'input',
        name: 'employee',
        message: 'What is the employee ID you would like to update?',
    },
    {
        type: 'input',
        name: 'role',
        message: 'What role ID you would like to update?',
    },
]) .then (function(res){
        db.query('UPDATE employee SET role_id=? WHERE id=?', [res.role, res.employee], function(err, data){
            console.table(data)
            menuPrompt()
        })
    })
}

menuPrompt()
