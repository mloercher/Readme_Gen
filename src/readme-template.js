// condition ? true : false

// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string

const licenseBadges = [
    {
        name: 'MIT',
        badge: 'https://img.shields.io/badge/License-MIT-yellow.svg',
        link: 'https://opensource.org/licenses/MIT'
    },
    {
        name: 'The Unlicense',
        badge: 'https://img.shields.io/badge/license-Unlicense-blue.svg',
        link: 'http://unlicense.org/'
    }]
    function renderLicenseName(licenseName) {


        const name = licenseBadges.map(license => {
            if (license.name === licenseName) return license.name
        })
    
        console.log(`The name returned is ${name}`)
    
        return name;
    }

    function renderLicenseBadge(license) {
        var badge;
        console.log("the license is", license)
        switch (license[0]){
          case "MIT": badge = `[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)`; break;
          case "Apache 2.0 License": badge =`[![License](https://img.shields.io/badge/License-Apache_2.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)`; break;
          case "IBM Public License Version 1.0": badge = `[![License: IPL 1.0](https://img.shields.io/badge/License-IPL_1.0-blue.svg)](https://opensource.org/licenses/IPL-1.0)`; break;
          case "Mozilla Public License 2.0": badge = `[![License: MPL 2.0](https://img.shields.io/badge/License-MPL_2.0-brightgreen.svg)](https://opensource.org/licenses/MPL-2.0)`; break;
        }
      return badge;
      }
// // TODO: Create a function that returns the license link
// // If there is no license, return an empty string
function renderLicenseLink(licenseName) {
    const link = licenseBadges.map(license => {
        if (license.name === licenseName) return license.link
    })

    console.log(`The link returned is ${link}`)

    return link;
}

module.exports = answers => {
    return `# ${answers.Title}
${renderLicenseBadge(answers.License)}

${answers.renderLicenseBadge}

## Table of Contents
* [Installation](#installation)
* [Usage](#usage)
* [License](#license)
* [Contributing](#contributing)
* [Tests](#tests)
* [Questions](#questions)
    
## Description

${answers.Description}

## Installation 

${answers.Installation}

## Usage 

${answers.Usage}

## License

${answers.License}

## Contributions

${answers.Contributions}

## Tests

${answers.Tests}

## Questions

Email Address: ${answers.Email}

GitHub Username: ${answers.Github}
    
`;
}