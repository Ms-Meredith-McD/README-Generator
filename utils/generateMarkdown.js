// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
async function renderLicenseBadge(license) {
  let licenseBadge;
  if (questions.license === 'MIT'){
    url = '![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)'
  } else if (questions.license === 'Apache 2.0') {
    licenseBadge = '![License](https://img.shields.io/badge/License-Apache%202.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)'
  } else if (questions.license === 'Mozilla Public License 2.0') {
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
  if (questions.license === 'MIT'){
    licenseLink = 'https://opensource.org/licenses/MIT'
  } else if (questions.license === 'Apache 2.0') {
    licenseLink = 'https://opensource.org/licenses/Apache-2.0'
  } else if (questions.license === 'Mozilla Public License 2.0') {
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
  return `# ${data.title}

`;
}

module.exports = generateMarkdown;
