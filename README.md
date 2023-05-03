# employee-tracker

## Description

For this Module 10 Challenge, the challege was to build a Node.js command-line application that takes in information about employees on a software engineering team, then generates an HTML webpage that displays summaries for each person. The motivation for this project is to help software engineering teams clearly see their entire team, everyones roles, and information in regards to members on their team. This project help strengthen my skills with Node.js, OOP, and Jest for unit tests.

## User Story

```md
AS A manager
I WANT to generate a webpage that displays my team's basic info
SO THAT I have quick access to their emails and GitHub profiles
```

## Acceptance Criteria

```md
GIVEN a command-line application that accepts user input
WHEN I am prompted for my team members and their information
THEN an HTML file is generated that displays a nicely formatted team roster based on user input
WHEN I click on an email address in the HTML
THEN my default email program opens and populates the TO field of the email with the address
WHEN I click on the GitHub username
THEN that GitHub profile opens in a new tab
WHEN I start the application
THEN I am prompted to enter the team manager’s name, employee ID, email address, and office number
WHEN I enter the team manager’s name, employee ID, email address, and office number
THEN I am presented with a menu with the option to add an engineer or an intern or to finish building my team
WHEN I select the engineer option
THEN I am prompted to enter the engineer’s name, ID, email, and GitHub username, and I am taken back to the menu
WHEN I select the intern option
THEN I am prompted to enter the intern’s name, ID, email, and school, and I am taken back to the menu
WHEN I decide to finish building my team
THEN I exit the application, and the HTML is generated
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

<img src="">

## Credits

Chris Baird - Central Tutors FSF Tutor

## License

MIT 