const inquirer = require("inquirer");
const fs = require('fs');
const shapes = require('./lib/shapes.js');
const logos = require('./lib/logos.js');

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

function newLogo() {
  inquirer.prompt(questions)
  .then(data => fs.writeFile(`${data.text}.svg`, logos(data)))
  .then(() => console.log('Your SVG logo was successfully generated!'))
  .catch((err) => console.log('There has been an error. Please try again.'));
}

newLogo();