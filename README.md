# Assignment Lift HR, React.JS Job list case study

### Overview

Create a form interface with an input named "Job", a selectbox named "Priority" and a button
named "Create".
Job input field validation rules
-Required
-Max 70 char
-Only English Letters
Priority Selectbox validation rules
-Required
-Urgent, Regular, Trivial(These should be in the options).
-A single selection can be made.
When the Create button is clicked, the content of the form that passes the validation creates a
record in the table below the form.
There should be Edit and Delete buttons on the same line for each record.
Clicking the edit button will display a popup for the relevant record.
In a form displayed in the popup, the Priority selection box should appear with the current Priority
information selected.When the "Update" button in the popup is clicked, the Priority value will
update the related record.(Job value cannot be changed, only Priority value can be changed)
Clicking the Delete button in the table will delete the related record.
There must be a Job search input above the table. Whenever this input content changes, the lines
containing the related Job record should be filtered and displayed in the table.
The records in the table should be displayed in descending order according to the order of
priority.
The background color for each record in the table should be the color representing the priority of
the relevant record.
Urgent - Red
Regular - Yellow
Trivial - Blue
It should be prepared using the React.JS library as a single page web application.

### Cloning and Running the Application in local

Clone the project into local

Install all the npm packages. Go into the project folder and type the following command to install all npm packages

```
npm install
```

In order to run the application Type the following command

```
npm start
```

## Built With

- [React](https://reactjs.org/) - A JavaScript library for building user interfaces
- [Bootstrap](https://getbootstrap.com/) - Quickly design and customize responsive mobile-first sites with Bootstrap, the world’s most popular front-end open source toolkit, featuring Sass variables and mixins, responsive grid system, extensive prebuilt components, and powerful JavaScript plugins.

## Authors

- **Hristomir Hristov** - _Initial work_ - [maddealer](https://github.com/maddealer)

## License

This project is licensed under the MIT License
