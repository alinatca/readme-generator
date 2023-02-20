function generateMarkdown(data) { 

  // Switch statement to set the license badge based on the user's choice of license
  switch (data.license) {
    case 'Apache License' :
    var licensePNG = "https://img.shields.io/badge/License-Apache%202.0-blue.svg";
    break;
    case 'MIT License' :
    var licensePNG = "https://img.shields.io/badge/License-MIT-yellow.svg";
    break;
    case 'BSD 2-Clause “Simplified” License' :
    var licensePNG = "https://img.shields.io/badge/License-BSD%202--Clause-orange.svg";
    break;
    }

  // Create a link to the user's GitHub profile
  gitlink = "https://github.com/${response.gitName}";

  // The template literal that will be returned as the README
  return `  
 
  # ${data.title}


  ![Github license](https://img.shields.io/badge/license-${data.license}-green.svg)

 
 
  ## Description
  ${data.description}

  ## Table of Contents

  * [Installation](#install)
  * [Usage](#usage)
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
  Here are a list of my project to give you a wider view of my knowledge [${data.username}](https://github.com/${data.username}).
`;
}

module.exports = generateMarkdown;
