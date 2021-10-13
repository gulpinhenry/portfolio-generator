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
        <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-1BmE4kWBq78iYhFldvKuhfTAU6auU8tT94WrHftjDbrCEXSU1oBoqyl2QvZ6jIW3" crossorigin="anonymous">
        <title> ${data.name}'s Portfolio</title>

    </head>
    <body class="d-flex h-100 text-center text-white bg-dark">
    <div class="cover-container d-flex w-100 h-100 p-3 mx-auto flex-column">
        <header class="mb-auto">
        <div>
            <h3 class="float-md-start mb-0">${data.name}</h3>
            <nav class="nav nav-masthead justify-content-center float-md-end">
              <a class="nav-link" href="${data.linkedin}" target = "_blank">LinkedIn</a>
              <a class="nav-link" href="${data.github}" target = "_blank">GitHub</a>
        </nav>
        </div>
        </header>

    <main class="px-3">
        <h1>${data.name}</h1>
        <p class="lead">${data.bio}</p>
        <p class="lead">${data.location}</p>
    </main>
   
  <style>
  .nav-masthead .nav-link {
    padding: .25rem 0;
    font-weight: 700;
    color: red;
    background-color: transparent;
    border-bottom: .25rem solid transparent;
  }
  
  .nav-masthead .nav-link:hover,
  .nav-masthead .nav-link:focus {
    border-bottom-color: red;
  }
  
  .nav-masthead .nav-link + .nav-link {
    margin-left: 1rem;
  }
  
  .nav-masthead .active {
    color: #fff;
    border-bottom-color: #fff;
  }

  body {
    text-shadow: 0 .05rem .1rem rgba(0, 0, 0, .5);
    box-shadow: inset 0 0 5rem rgba(0, 0, 0, .5);
  }

  .cover-container {
  max-width: 42em;
}
  
  </style>
   
    </div>
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


  }
  );