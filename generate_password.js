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

  const options = {
    length: queryContent.passwordLength,
    lowercase: typeof queryContent.includeLowercase !== 'undefined' ? 'on' : 'off',
    uppercase: typeof queryContent.includeUppercase !== 'undefined' ? 'on' : 'off',
    numbers:   typeof queryContent.includeNumbers !== 'undefined' ? 'on' : 'off',
    symbols:   typeof queryContent.includeSymbols !== 'undefined' ? 'on' : 'off',
    excludeCharacters: queryContent.excludeCharacters
  }

  let collection = []

  if (options.lowercase === 'on') {
    collection = collection.concat(lowerCaseLetters.split(''));
  }

  if (options.uppercase === 'on') {
    collection = collection.concat(upperCaseLetters.split(''));
  }

  if (options.numbers === 'on') {
    collection = collection.concat(numbers.split(''));
  }

  if (options.symbols === 'on') {
    collection = collection.concat(symbols.split(''));
  }

  // remove thins user do not need
  // filter, includes
 if (options.excludeCharacters) {
    collection = collection.filter(character => !options.excludeCharacters.includes(character));
  }

  let password = ''
  for (let i = 0; i < options.length; i++) {
    password += sample(collection)
  }

  return [password, collection];
}

module.exports = { generatePassword };
