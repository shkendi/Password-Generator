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

1. Created a function to prompt user for password options

function getPasswordOptions() {
var length = parseInt(
prompt('Enter the length of the password (between 8 and 128 characters)')
)

// Validate password length
while (isNaN(length) || length < 8 || length > 128) {
length = parseInt(
prompt(
'Invalid length! Please enter a length between 8 and 128 characters'
)
)
}

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

![Alt text](<images/Screenshot 2023-12-19 at 14.37.33.png>)

I then started getting the data of the given array such as the number of months. I console loged everything step by step to check if I got the right result. ![Alt text](<Screenshot 2023-12-10 at 21.26.51.png>)

const totalMonths = finances.length

3. Next, I found the total amount of profits/loses over the entire period using the .reduce method to calculate the sum of all numbers in the array.
   The reduce() method starts from the first element of the array (or the initial value if provided) and iterates through each element of the array. The accumulator starts at 0 (zero). Console log the result to check if there are any errors showing.
