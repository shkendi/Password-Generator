# Module 5 Challenge: Password Generator

## Description

This week’s challenge requires me to create an application that an employee can use to generate a random password based on criteria they’ve selected by modifying starter code. This app will run in the browser, and will feature dynamically updated HTML and CSS powered by JavaScript code that I write. It will have a clean and polished user interface that is responsive, ensuring that it adapts to multiple screen sizes.

## Instructions

The following image shows the web application's appearance and functionality:

![password generator demo](./assets/05-javascript-challenge-demo.png)

- Generate a password when the button is clicked

  - Present a series of prompts for password criteria
    - Length of password
      - At least 8 characters but no more than 128.
    - Character types
      - Lowercase
      - Uppercase
      - Numeric
      - Special characters ($@%&\*, etc)
  - Code should validate for each input and at least one character type should be selected
  - Once prompts are answered then the password should be generated and displayed in an alert or written to the page

  ## Technical Requirements

This challenge is graded based on the following criteria:

Satisfies all of the above acceptance criteria plus the following:

- Application deployed at live URL.

- Application loads with no errors.

- Application GitHub URL submitted.

- GitHub repository that contains application code.

- Application user experience is intuitive and easy to navigate.

- Application user interface style is clean and polished.

- Application resembles the mock-up functionality provided in the challenge instructions.

- Repository has a unique name.

- Repository follows best practices for file structure and naming conventions.

- Repository follows best practices for class/id naming conventions, indentation, quality comments, etc.

- Repository contains multiple descriptive commit messages.

- Repository contains quality README file with description, screenshot, and link to deployed application.

## Getting into conding

- Following the instructions, I started by creating a new repository which I named it 'Password-Generator'. I copied the starter code with index.html and index.js files in it.

- Based on the instructions, and on the initial code I have been provided on the script.js file, I followed the given instructions in order as below:

1. Created a function to prompt user for password options.

function getPasswordOptions() {
var length = parseInt(
prompt('Enter the length of the password (between 8 and 128 characters)')
)

2. Validated password length based on the given conditions.

   while (isNaN(length) || length < 8 || length > 128) {
   length = parseInt(
   prompt(
   'Invalid length! Please enter a length between 8 and 128 characters'
   )
   )
   }

- The user is prompted to options and after confirming their choice, the password generated would have to include user's choice.

var lowerCaseCharacters = confirm('Include lowercase characters?')
var upperCaseCharacters = confirm('Include uppercase characters?')
var numericCharacters = confirm('Include numeric characters?')
var specialCharacters = confirm('Include special characters?')

if (
!(
includeSpecialCharacters ||
includeNumericCharacters ||
includeLowerCaseCharacters ||
includeUpperCaseCharacters
)
) {
alert('You must select at least one character type!')
return getPasswordOptions()
}

return {
length: length,
includeSpecialCharacters: specialCharacters,
includeNumericCharacters: numericCharacters,
includeLowerCaseCharacters: lowerCaseCharacters,
includeUpperCaseCharacters: upperCaseCharacters,
}
}

3. Created the function for getting a random element from an array.

function getRandom(arr) {
var randomIndex = Math.floor(Math.random() \* arr.length)
return arr[randomIndex]
}

4. Created a function to generate password with user input.

function generatePassword() {
var options = getPasswordOptions()
var password = ''
password +=
upperCasedCharacters[
Math.floor(Math.random() * upperCasedCharacters.length)
]
password +=
lowerCasedCharacters[
Math.floor(Math.random() * lowerCasedCharacters.length)
]
password +=
numericCharacters[Math.floor(Math.random() * numericCharacters.length)]
password +=
specialCharacters[Math.floor(Math.random() * specialCharacters.length)]

var availableChars = []
var generatePassword = ''

if (options.includeSpecial) {
availableChars = availableChars.concat(specialCharacters)
}
if (options.includeNumeric) {
availableChars = availableChars.concat(numericCharacters)
}
if (options.includeLowerCase) {
availableChars = availableChars.concat(lowerCasedCharacters)
}
if (options.includeUpperCase) {
availableChars = availableChars.concat(upperCasedCharacters)
}

console.log(availableChars)

for (var i = 0; i < options.pwLen; i++) {
var randomChar = getRandom(availableChars)
generatePassword += randomChar
}

// alert('Generated Password: ' + generatePassword)

return generatePassword
}

5. Created a function to write the password input and added it to the eventListener so it could be executed to the browser.

function writePassword() {
var password = generatePassword()
console.log(password)
var passwordText = document.querySelector('#password')

passwordText.value = password
}

// Add event listener to generate button
generateBtn.addEventListener('click', writePassword)

6. I added a README file.

7. Deployed the project to the GitHub pages.
