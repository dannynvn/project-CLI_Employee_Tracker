INSERT INTO departments (department_name)
    VALUE ("Product"),
          ("Engineering"),
          ("Member Experience"),
          ("People Operations"),
          ("Sales");


INSERT INTO roles (job_title, salary, department_id)
    VALUE ("Operations Associate", 80000, 3),
          ("Client Consultant", 95000, 5),
          ("Operations Manager", 100000, 4),
          ("Software Developer", 120000, 2),
          ("Software Dev Manager", 200000, 2),
          ("Product Analyst", 90000, 1);


INSERT INTO employees (first_name, last_name, role_id, manager_id)
    VALUE ("Dan", "Ng", 24, null);
INSERT INTO employees (first_name, last_name, role_id, manager_id)
    VALUE ("Dolly", "Vu", 21, null);
INSERT INTO employees (first_name, last_name, role_id, manager_id)
    VALUE ("Terry", "De", 23, null);
INSERT INTO employees (first_name, last_name, role_id, manager_id)
    VALUE ("Meeko", "Mikolai", 19, 45);
INSERT INTO employees (first_name, last_name, role_id, manager_id)
    VALUE ("Tim", "Tare", 22, 46);