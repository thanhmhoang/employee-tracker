INSERT INTO department (name)
VALUES ("Sales"),
       ("Engineering"),
       ("Finance"),
       ("Legal"),
       ("HR");

INSERT INTO role (title, salary, department_id)
VALUES ("Account Executive", 130000, 1),
       ("Sales Development Rep", 50000, 1),
       ("Financial Analyst", 90000, 3),
       ("Accountant", 100000, 3),
       ("Payroll Specialist", 70000, 5),
       ("Software Engineer", 200000, 2),
       ("Cloud Engineer", 150000, 2),
       ("Lawyer", 100000, 4),
       ("Legal Team Lead", 130000, 4);
       
INSERT INTO employees(first_name, last_name, role_id, manager_id)
    VALUES  ("James", "White", 1, 3),
            ("Steven", "Tran", 6, 1),
            ("Sarah", "Franklin", 2, NULL),
            ("Michael", "Jones", 3, NULL),
            ("Katie", "Johnson", 4, 2),
            ("Frank", "Hernandez", 5, 4),
            ("Amy", "Kim", 6, 5),
            ("Joe", "Chen", 8, NULL),
            ("Alicia", "Smith", 7, 6),
            ("Tom", "Burke", 9, 7);       