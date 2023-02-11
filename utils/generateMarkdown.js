// function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}

  ## Description
  ${data.description}

  ## Table of Contents

  * [Installation](#install)
  * [Usage](#usage)
  * [Screenshot](#screenshot)
  * [Licence](#licence)  
  * [Contributing](#contributing)
  * [Tests](#tests)
  * [Questions](#questions)
  

  ## Installation
  To install the required dependencies, run the following command:
  \`\`\`
  ${data.installation}
  \`\`\`
  
  ## Usage
  ${data.usage}
  
  ## Screenshot of the application
  ![${data.title} Screenshot](${data.screenshot})
  
  ## License
  This project is licensed under the ${data.license} license.
  
  ## Contributing
  ${data.contributing}
  
  ## Tests
  To run tests, use the following command:
  \`\`\`
  ${data.tests}
  \`\`\`
  
  ## Questions
  Don't hesitate to contact me if you have any questions at ${data.email}.
  Here are a list of my project to give you a wider scope of my knowledge [${data.github}](https://github.com/${data.github}).
`;
}

module.exports = generateMarkdown;
