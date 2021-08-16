// TODO: Include packages needed for this application
const inquirer = require("inquirer");
const fs = require("fs");
const util = require("util");
const generateMD = require("./utils/generateMarkdown");
// TODO: Create an array of questions for user input

const writeFile = util.promisify(fs.writeFile);
// TODO: Create a function to write README file
function questions() {
  return inquirer.prompt([
    {
      type: 'input',
      name: 'title',
      message: 'What is the title of the project?',
    },
    {
      type: 'input',
      name: 'description',
      message: 'What is your project about?',
    },
    {
      type: 'input',
      name: 'installation',
      message: 'What is your project\'s name?',
    },
    {
      type: 'input',
      name: 'usage',
      message: 'What is the function of your project?',
    },
    {
      type: 'input',
      name: 'contribution',
      message: 'Who contributed to this project in addition to yourself?',
    },
    {
      type: 'input',
      name: 'tests',
      message: 'What tests do you want to run?',
    },
    {
      type: 'list',
      name: 'license',
      message: 'What licenses do you want to attach to your project?',
      choices: [
        { title: 'None', value: 'None' },
        { title: 'GNU Affero General Public License v3.0', value: 'GNU Affero General Public License v3.0' },
      ]
    },
    {
      type: 'input',
      name: 'github',
      message: 'What is your GitHub handle?',
    },
    {
      type: 'input',
      name: 'email',
      message: 'What is your e-mail?',
    }
  ]);
}
// TODO: Create a function to initialize app
function init() {
  questions()
  .then((answers) => {
    writeFile('./dist/README.md', generateMD(answers))
  })
  .then(() => console.log('Successfully wrote to README.md'))
  .catch((err) => console.error(err));
}

// Function call to initialize app
init();
