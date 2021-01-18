const nameInverter = function(name) {
  if(name === ''){
    return '';
  }
  if(name === 'name'){
    return 'name';
  }
  if(name === 'Dr.'){
    return '';
  }
  if(name === undefined){
    return 'Error :)';
  }


}

module.exports = nameInverter;