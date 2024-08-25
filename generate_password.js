// sample a element in collection
function sample(collection) {
  let randomIndex = Math.floor(Math.random() * collection.length)
  return collection[randomIndex]
}

function generatePassword(queryContent) {
  // define things user might want
  const lowerCaseLetters = 'abcdefghijklmnopqrstuvwxyz';
  const upperCaseLetters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
  const numbers = '0123456789';
  const symbols = '!@#$%^&*()_+';

  const options = queryContent
  // const options = {
  //   length: queryContent.passwordLength,
  //   // for the checkbox options such as lowercase, uppercase, if it is checked, the server will receive 'on' as default. If it is not checked, the server will not receive the key.
  //   excludeCharacters: queryContent.excludeCharacters
  // }

  let collection = []

  if (options.includeLowercase === 'on') {
    collection = collection.concat(lowerCaseLetters.split(''));
  }

  if (options.includeUppercase === 'on') {
    collection = collection.concat(upperCaseLetters.split(''));
  }

  if (options.includeNumbers === 'on') {
    collection = collection.concat(numbers.split(''));
  }

  if (options.includeSymbols === 'on') {
    collection = collection.concat(symbols.split(''));
  }

  // remove thins user do not need
  // filter, includes
 if (options.excludeCharacters) {
    collection = collection.filter(character => !options.excludeCharacters.includes(character));
  }

  let password = ''
  for (let i = 0; i < options.passwordLength; i++) {
    password += sample(collection)
  }

  return [password, collection];
}

module.exports = { generatePassword };
