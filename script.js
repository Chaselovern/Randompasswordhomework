// Assignment Code
var generateBtn = document.querySelector("#generate");
// Variables for possible character selection
var numbers= "0123456789";
var upperCase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
var lowerCase = "abcdefghijlmnopqrstuvwxyz";
var special = "~`!@#$%^&*()_-+=";
var passwordLength = null;
var characterList = "";



// Write password to the #password input
function writePassword() {
  characterList = userPrompt();
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

function userPrompt(){
  var charactersUsed = "";
  do{
  /* Prompt the user about using numbers in thier password and validate response */
    do {
      var useNumbers = prompt("Do you want to use numbers in your password? (y/n) ");
    }while (useNumbers != 'y' && useNumbers != 'n');
    /*if the user wants to use numbers then add the numbers to the array to be selected from*/
    if (useNumbers == 'y'){
      charactersUsed = charactersUsed.concat(numbers);
      
    }

    /* Prompt the user about using uppercase letters in their password and validate response */
    do{var useUppercase = prompt("Do you want to use uppercase letters in your password? (y/n) ");}
    while (useUppercase != 'y' && useUppercase != 'n');
    /* if the user wants to use uppercase letters then add the uppercase letters to the array to be selected from */
    if (useUppercase == 'y'){
      charactersUsed = charactersUsed.concat(upperCase);
    }

    /* Prompt the user about using lowercase letters in their password and validate response */
    do{var useLowercase = prompt("Do you want to use lowercase letters in your password? (y/n) ");}
    while (useLowercase != 'y' && useLowercase != 'n');
    /* if the user wants to use lowercase letters then add the lowercase letters to the array to be selected from */
    if (useLowercase == 'y'){
      charactersUsed = charactersUsed.concat(lowerCase);
    }
    
    /* Prompt the user about using special characters in their password and validate response */
    do{var useSpecial = prompt ("Do you want to use speical characters in your password? (y/n) ");}
    while (useSpecial != 'y' && useSpecial != 'n');
    /* if the user wants to use special characters then add the special characters to the array to be selected from */
    if (useSpecial =='y'){
      charactersUsed = charactersUsed.concat(special);
    }
    /* Prompt the user about how long thier password will be and validate response */
    do {passwordLength = prompt("How long would you like your password to be? (8-128 characters)");}
    while( passwordLength < 8 || passwordLength >128 );

    if (charactersUsed.length <1){
      alert("You must select atleast one character type!");
    }}while(charactersUsed.length< 1);
    
  /* returns character list to be used for password */
  return charactersUsed;
}

function generatePassword(){
  var pwd = "";
  /* this for loop runs for the chosen length of the password*/
  for (i=0; i<passwordLength; i++){
    /*randomly select a char from the list of possible choices and add to the password*/
      var pos = Math.floor(Math.random() * characterList.length);
      pwd = pwd.concat(characterList.charAt(pos));
      }

   
  return pwd;

}
// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
