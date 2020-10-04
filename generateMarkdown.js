function generateMarkdown({
  userName,
  theEmail,
  projectTitle,
  projectDescription,
  projectImg,
  projectInstall,
  projectRun,
  projectRunTest,
  projectInformation,
  projectLicense,
  avatarURL
}) {
  projectTitleDashed = projectTitle.replace(/\s+/g, '-');
  return `

    [contributors-shield]: https://img.shields.io/github/contributors/${userName}/${projectTitleDashed}.svg?style=flat-square
    [contributors-url]: https://github.com/${userName}/${projectTitleDashed}/graphs/contributors
    [forks-shield]: https://img.shields.io/github/forks/${userName}/${projectTitleDashed}.svg?style=flat-square
    [forks-url]: https://github.com/${userName}/${projectTitleDashed}/network/members
    [stars-shield]: https://img.shields.io/github/stars/${userName}/${projectTitleDashed}.svg?style=flat-square
    [stars-url]: https://github.com/${userName}/${projectTitleDashed}/stargazers
    [issues-shield]: https://img.shields.io/github/issues/${userName}/${projectTitleDashed}.svg?style=flat-square
    [issues-url]: https://github.com/${userName}/${projectTitleDashed}/issues
    [license-shield]: https://img.shields.io/github/license/${userName}/${projectTitleDashed}.svg?style=flat-square
    [license-url]: https://github.com/${userName}/${projectTitleDashed}/blob/master/license.txt
    [![Contributors][contributors-shield]][contributors-url] [![Forks][forks-shield]][forks-url] [![Stargazers][stars-shield]][stars-url] [![Issues][issues-shield]][issues-url] [![license.txt][license-shield]][license-url]
    # ${projectTitle}

    ## Description
    ${projectDescription}

    ## Table of Contents
    - [Title](#title)
    - [Description](#description)
    - [Table of Contents](#table-of-contents)
    - [Screenshots](#screenshots)
    - [Installation](#installation)
    - [Usage](#usage)
    - [Testing](#testing)
    - [Additional Information](#additional-information)
    - [License](#license)
    - [Contributing](#contributing)
    - [Questions and Feedback](#questions-and-feedback)

    ## Screenshots
    <img src="${projectImg}" alt="${projectTitle}"/>

    ## Installation
    Download or clone the repo, then use a CLI and run the ${projectInstall} command.
    
    ## Usage
    Run the application with the CLI command ${projectRun} and follow the prompts.
    
    ## Testing
    Run the tests using the CLI command ${projectRunTest}.
    
    ## Additional Information
    ${projectInformation}
    
    ## License
    This project is licensed under the ${projectLicense} License - see the [license.txt](https://github.com/${userName}/${projectTitleDashed}/blob/master/license.txt) file for details
   
    ## Contributing
    This is the code of conduct, and the process for pull requests.
    
    ## Questions
    Please contact me using one of the following:
    
    - Github: [${userName}](https://gist.github.com/${userName})  [<img src="${avatarURL}" height="50" width="50" alt="${userName}"/>](https://gist.github.com/${userName}) 
    
    - Email: ${theEmail};
    `
}
module.exports = generateMarkdown;