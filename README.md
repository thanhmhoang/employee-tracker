# employee-tracker

## Description

For this Module 12 Challenge, the challege was as developers frequently have to create interfaces that allow non-developers to easily view and interact with information stored in databases. These interfaces are called **content management systems (CMS)**. The assignment was to build a command-line application from scratch to manage a company's employee database, using Node.js, Inquirer, and MySQL. The motivation for this project was to help the user easily manage their employee database to keep up with organizational changes in an organized manner. this help strengthen my skills using Node.js and MySQL.

## User Story

```md
AS A business owner
I WANT to be able to view and manage the departments, roles, and employees in my company
SO THAT I can organize and plan my business
```


## Acceptance Criteria

```md
GIVEN a command-line application that accepts user input
WHEN I start the application
THEN I am presented with the following options: view all departments, view all roles, view all employees, add a department, add a role, add an employee, and update an employee role
WHEN I choose to view all departments
THEN I am presented with a formatted table showing department names and department ids
WHEN I choose to view all roles
THEN I am presented with the job title, role id, the department that role belongs to, and the salary for that role
WHEN I choose to view all employees
THEN I am presented with a formatted table showing employee data, including employee ids, first names, last names, job titles, departments, salaries, and managers that the employees report to
WHEN I choose to add a department
THEN I am prompted to enter the name of the department and that department is added to the database
WHEN I choose to add a role
THEN I am prompted to enter the name, salary, and department for the role and that role is added to the database
WHEN I choose to add an employee
THEN I am prompted to enter the employee’s first name, last name, role, and manager, and that employee is added to the database
WHEN I choose to update an employee role
THEN I am prompted to select an employee to update and their new role and this information is updated in the database 
```

## Installation

To use this application, please follow the link to the GitHub repository, https://github.com/thanhmhoang/employee-tracker. Once on the GitHub repo, click on the green "Code" button, then click "SSH" and copy the text in the box to be used as your SSH key. Next if you are on Windows, open your Git Bash, and your terminal if on Mac. Then proceed to where you would like this folder me location in your device and run the command 
The application will be invoked by using the following command:
```bash
git clone https://github.com/thanhmhoang/employee-tracker
```
Please make sure that you MySQL server downloaded and running. 

## Usage

To use this application, once you have completed the installation instructions, open the folder in VS code. 

Once the VS code is open, right click on the "schema.sql" file located in the "db" folder and click "Open in Integrated Terminal". Once the terminal has populated, run the following command to connect to MySQL.

```bash
mysql -uroot -p
```
Then enter your password or hit enter if you do not have a password. When you are successfully connect to MySQL, enter the following command to create your database and tables
```bash
SOURCE schema.sql;
```
Once that is done, enter the following command to add values into the database and tables created
```bash
SOURCE seeds.sql;
```

Once you have completed all of the MySQL steps, then right click on the "server.js" file and click "Open in Integrated Terminal". Once you are in the terminal, run the following command in the command line.

```bash
node server.js
```
Users will be prompted a series of questions and options. Users will be able to navigate up and down the options in the terminal to decide their course of action. Users will be able to view the departments, roles, and employees in their database. Along with adding departments, roles, employees and/or updating an employee role. Once they are done, they can click "Exit" to leave the terminal application

Follow this link for a video walk-through of the application: https://youtu.be/i1qySDWJAME

## Credits

Chris Baird - Central Tutors FSF Tutor

## License

MIT 