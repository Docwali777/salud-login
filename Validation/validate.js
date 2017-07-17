const validator = require('validator');

function validation(obj){
  let errors = {}

if(!validator.isEmail(obj.Email)){
  errors.Email = 'This is not a valid Email'
}

if(!validator.isAlphanumeric(obj.Username)){
  errors.Username = 'Please enter a Username'
}

if(!validator.isAlphanumeric(obj.Password)){
  errors.Password = 'Please enter a Password'
}

if(!validator.isAlphanumeric(obj.ConfirmPassword)){
  errors.ConfirmPassword = 'Please enter Password Again to Confirm'
}
if(!validator.equals(obj.Password, obj.ConfirmPassword)){
  errors.ConfirmPassword = 'Passwords Do not Match'
}

  return errors
}

const obj1 = {
Email: 'docwalimail.com',
Username: ' ',
Password: 'locql',
ConfirmPassword: 'locq '

}
validation(obj1)
module.exports = validation
