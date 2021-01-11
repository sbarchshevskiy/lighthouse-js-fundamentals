const nameInverter = function(name) {
  if (name === '') {
    return '';
  } else if(name === 'Dr.'){
    return '';
  } else if (name === undefined) {
    throw 'Error :)';
  }


  return name;
}

console.log(nameInverter('Dr.'))

module.exports = nameInverter;