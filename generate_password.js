// sample a element in collection
function sample(collection) {
  let randomIndex = Math.floor(Math.random() * collection.length)
  return collection[randomIndex]
}

function generatePassword() {
  // define things user might want
  const lowerCaseLetters = 'abcdefghijklmnopqrstuvwxyz';
  const upperCaseLetters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
  const numbers = '0123456789';
  const symbols = '!@#$%^&*()_+';

  const options = {
    length: 12,
    lowercase: 'on', 
    // uppercase: 'on',
    numbers: 'on',
    symbols: 'on',
    excludeCharacters: '02468'
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

  if (options.excludeCharacters) {
    collection = collection.filter(character => !options.excludeCharacters.includes(character));
  }

  let password = ''
  for (let i = 0; i < options.length; i++) {
    password += sample(collection)
  }

  return [password, collection];
}


const [generatedPassword, collection_behind] = generatePassword();

console.log('generatedPassword:', generatedPassword);
console.log('collection_behind:', collection_behind);

 
