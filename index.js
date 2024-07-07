const inquirer = require("inquirer");
const fs = require('fs');
const shapes = require('./lib/shapes.js');
const { writeFile } = require('fs/promises');
const { newLogo } = require('./lib/logos');
const { error } = require("console");

const questions = [
    {
      type: 'input',
      message: 'Please provide up to three characters for the text of your logo',
      name: 'text',
        validate: function(input) {
          if (input.length >= 4) {
            return 'Please enter a max of 3 characters'
          } else {
            return true;
          }
        }
    },
    {
      type: 'input',
      message: 'Enter a text color',
      name: 'text color'
    },
    {
      type: 'list',
      message: 'Please select a shape for your logo',
      choices: [ 'circle', 'triangle', 'square' ],
      name: 'shape'
    },
    {
      type: 'input',
      message: 'Enter a shape color',
      name: 'shape color'
    },
];

function makeLogo() {
  inquirer.prompt(questions)
  .then(data => writeFile(`${data.text}.svg`, newLogo(data)))
  .then(() => console.log('Your SVG logo was successfully generated!'))
  .catch((err) => console.log(err));
}

makeLogo();