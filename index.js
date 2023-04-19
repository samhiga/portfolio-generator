const fs = require("fs");
// const axios = require("axios");
const inquirer = require("inquirer");


inquirer
  .prompt([ 
    {
    type: 'input',
    message: 'What is the project title?',
    name: 'Title',
    },
    {
    type: 'input',
    message: 'What is your GitHub username',
    name: 'GitHub username',
    },
    {
    type: 'input',
    message: 'what is your email address?',
    name: 'email',
    },
])

  .then((data) => {
    console.log(data);
    const filename = `${data.name.toLowerCase().split(' ').join('')}.json`; 

    fs.writeFile(filename, JSON.stringify(data, null, '\t'), (err) =>
      err ? console.log(err) : console.log('Success!')
    );
  });
