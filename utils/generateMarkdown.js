// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  if (license == 'None') {
    return '';
  } else if (license == 'GNU Affero General Public License v3.0') {
    return `![GitHub license](https://img.shields.io/badge/license--agpl--3.0--lightgrey)`
  }
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  if (license == 'None') {
    return '';
  } else if (license == 'GNU Affero General Public License v3.0') {
    return `[GitHub license](https://api.github.com/licenses/agpl-3.0)`
  }
}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  if (license == 'None') {
    return '';
  } else if (license == 'GNU Affero General Public License v3.0') {
    return `AFFERO GENERAL PUBLIC LICENSE\n Version 3 GNU Terms and Agreements`
  }
}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `## ${data.title}
  -${data.description}
  # Installation
  - ${data.installation}
  # Usage
  - ${data.usage}
  # Contribution 
  - ${data.contribution}
  # Tests
  - ${data.tests}
  # Questions
  - ${data.github}
  - ${data.email}
  # License
  - ${renderLicenseBadge(data.license)}
  - ${renderLicenseLink(data.license)}
  - ${renderLicenseSection(data.license)}
`;
}

module.exports = generateMarkdown;
