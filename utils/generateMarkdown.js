// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
async function renderLicenseBadge(license) {
  let licenseBadge;
  if (data.license === 'MIT'){
    licenseBadge = '![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)'
  } else if (data.license === 'Apache 2.0') {
    licenseBadge = '![License](https://img.shields.io/badge/License-Apache%202.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)'
  } else if (data.license === 'Mozilla Public License 2.0') {
    licenseBadge = '![License: GPL v3](https://img.shields.io/badge/License-MPL%202.0-brightgreen.svg)'
  } else {
    licenseBadge = ''
  }
  return licenseBadge
}
// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  let licenseLink;
  if (data.license === 'MIT'){
    licenseLink = 'https://opensource.org/licenses/MIT'
  } else if (data.license === 'Apache 2.0') {
    licenseLink = 'https://opensource.org/licenses/Apache-2.0'
  } else if (data.license === 'Mozilla Public License 2.0') {
    licenseLink = 'https://opensource.org/licenses/MPL-2.0'
  } else {
    licenseLink = ''
  }
  return licenseLink
}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
const licenseBadge = renderLicenseBadge(license);
const licenseLink = renderLicenseLink(license);
return `
${licenseBadge}`
}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `
${licenseBadge}

# ${data.title}

## Description

${data.description}

## Table of Contents

- [Installation](#installation)
- [Usage](#usage)
- [License](#license)
- [Credits](#credits)
- [Tests](#tests)
- [Questions](#questions)

## Installation

${data.install}

## License
${data.license}
Please follow the link to learn more about the license: 
${licenseLink}

## Contributors

${data.contributors}

## Tests

${data.test}

## Questions

For any questions you may email ${email} or visit ${github}.
`;
}

module.exports = generateMarkdown;
