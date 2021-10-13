const fs = require("fs");
const inquirer = require("inquirer");

function writeData(data)
{
    let output = `
    <!DOCTYPE html>
    <html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title> ${data.name}'s Portfolio</title>
    </head>
    <body>
        <h1 id = "name">${data.name}</h1>
        <h2 id = "location">${data.location}</h2>
        <h3 id = "bio">${data.bio}</h3>
        <a id = "linkedin" href = "${data.linkedin}" target = "_blank">${data.linkedin}</a>
        <a id = "github" href = "${data.github}" target = "_blank">${data.github}</a>
    </body>
    </html>
    
    `;

    fs.writeFile('output.html', output, (err) =>
    err ? console.error(err) : console.log('Success!')
    );
}
inquirer
  .prompt([
    {
      type: 'input',
      message: 'What is your name?',
      name: 'name',
    },
    {
      type: 'input',
      message: 'Where are you located?',
      name: 'location',
    },
    {
        type: 'input',
        message: 'Write something about yourself. Add a quick bio:',
        name: 'bio',
      },
      {
        type: 'input',
        message: 'What is your LinkedIn profile URL?',
        name: 'linkedin',
      },
      {
        type: 'input',
        message: 'What is your GitHub profile URL?',
        name: 'github',
      }
  ])
  .then((response) => {
    writeData(response);
    console.log('Success!');

  }
  );