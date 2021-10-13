const fs = require("fs");
const inquirer = require("inquirer");

function writeData(data)
{
    let output = "";





    fs.writeFile('output.html', output, (err) =>
    err ? console.error(err) : console.log('Success!')
    );
}
inquirer
  .prompt([
    {
      type: 'input',
      message: 'What is your user name?',
      name: 'username',
    },
    {
      type: 'password',
      message: 'What is your password?',
      name: 'password',
    },
    {
      type: 'password',
      message: 'Re-enter password to confirm:',
      name: 'confirm',
    },
  ])
  .then((response) => {
    console.log(response)
    response.confirm === response.password
      ? console.log('Success!')
      : console.log('You forgot your password already?!')
  }
  );