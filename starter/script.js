// Array of special characters to be included in password
var specialCharacters = [
  '@',
  '%',
  '+',
  '\\',
  '/',
  "'",
  '!',
  '#',
  '$',
  '^',
  '?',
  ':',
  ',',
  ')',
  '(',
  '}',
  '{',
  ']',
  '[',
  '~',
  '-',
  '_',
  '.',
]

// Array of numeric characters to be included in password
var numericCharacters = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9']

// Array of lowercase characters to be included in password
var lowerCasedCharacters = [
  'a',
  'b',
  'c',
  'd',
  'e',
  'f',
  'g',
  'h',
  'i',
  'j',
  'k',
  'l',
  'm',
  'n',
  'o',
  'p',
  'q',
  'r',
  's',
  't',
  'u',
  'v',
  'w',
  'x',
  'y',
  'z',
]

// Array of uppercase characters to be included in password
var upperCasedCharacters = [
  'A',
  'B',
  'C',
  'D',
  'E',
  'F',
  'G',
  'H',
  'I',
  'J',
  'K',
  'L',
  'M',
  'N',
  'O',
  'P',
  'Q',
  'R',
  'S',
  'T',
  'U',
  'V',
  'W',
  'X',
  'Y',
  'Z',
]

// Function to prompt user for password options
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

  var includeLowerCase = confirm('Include lowercase characters?')
  var includeUpperCase = confirm('Include uppercase characters?')
  var includeNumeric = confirm('Include numeric characters?')
  var includeSpecial = confirm('Include special characters?')

  if (
    !(includeSpecial || includeNumeric || includeLowerCase || includeUpperCase)
  ) {
    alert('You must select at least one character type!')
    return
  }

  return {
    pwLen: length,
    includeSpecial: includeSpecial,
    includeNumeric: includeNumeric,
    includeLowerCase: includeLowerCase,
    includeUpperCase: includeUpperCase,
  }
}

// Function for getting a random element from an array
function getRandom(arr) {
  var randomIndex = Math.floor(Math.random() * arr.length)
  return arr[randomIndex]
}

// Function to generate password with user input
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

// Get references to the #generate element
var generateBtn = document.querySelector('#generate')

// Write password to the #password input
function writePassword() {
  var password = generatePassword()
  console.log(password)
  var passwordText = document.querySelector('#password')

  passwordText.value = password
}

// Add event listener to generate button
generateBtn.addEventListener('click', writePassword)
