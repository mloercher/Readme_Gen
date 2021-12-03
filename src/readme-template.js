module.exports = answers => {
    return `# ${answers.Title}

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

${answers.Installaton}

## Usage 

${answers.Usage}

## License

${answers.License}

## Contributions

${answers.Constributions}

## Tests

${answers.Tests}

## Questions

${answers.Questions}
    
`;
}