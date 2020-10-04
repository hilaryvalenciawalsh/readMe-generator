generateMarkdown = require("./generateMarkdown.js");

const fs = require("fs");
const axios = require("axios");
const inquirer = require("inquirer");


function userInfo(userName) {
  return axios.get(`https://api.github.com/users/${userName}`).catch((err) => {
    console.log(`User not found`);
    process.exit(1);
  });
}

function getInfoFromUser() {
  inquirer
    .prompt([
      {
        type: "input",
        message: "Type your Github username:",
        name: "userName",
      },
      {
        type: "input",
        message: "Type your email address:",
        name: "theEmail",
      },
      {
        type: "input",
        message: "Type your repo/project title:",
        name: "projectTitle",
      },
      {
        type: "input",
        message: "Type the description of your project:",
        name: "projectDescription",
      },
      {
        type: "input",
        message: "Type the path for your project's screenshot:",
        default: "screenshot.png",
        name: "projectImg",
      },
      {
        type: "input",
        message: "What command should be run to install dependencies:",
        default: "`npm install`",
        name: "projectInstall",
      },
      {
        type: "input",
        message: "What command should be run to run your program:",
        default: "`node index.js`",
        name: "projectRun",
      },
      {
        type: "input",
        message: "What command should be run to start tests:",
        default: "`npm test`",
        name: "projectRunTest",
      },
      {
        type: "input",
        message: "Any additional information about your project:",
        name: "projectInformation",
      },
      {
        type: "input",
        message: "Please input a license type for your project:",
        default: "MIT",
        name: "projectLicense",
      },
    ])

    .then((inquirerResponses) => {
      userInfo(inquirerResponses.userName).then((githubResponse) => {
        inquirerResponses.avatarURL = githubResponse.data.avatar_url;
        let markdownReadme = generateMarkdown(inquirerResponses);
        putToFile("README.md", markdownReadme);
      });
    });
}

function putToFile(file, data) {
  fs.writeFile(file, data, function (err) {
    if (err) {
      return console.log(err);
    }
    console.log("Woo Hoo, All Done!");
  });
}

getInfoFromUser();
