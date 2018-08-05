//Marc Landolt jun, www.marclandolt.ch
//GPL V3

function myFunction() {
    //alert(document.getElementById("plaintext").value);
    document.getElementById("encrypted").value = encrypt(document.getElementById("plaintext").value);
}

//Helper Function to replace single letter / character
String.prototype.replaceAt=function(index, character) {
    return this.substr(0, index) + character + this.substr(index+character.length);
}

//Helper Function for format
Number.prototype.totalDigits = function(n) {
    return this.toPrecision(n).split('.').reverse().join('');
};



function encrypt(parameter) {

  for (i = 0; i < parameter.length; i++) { 
    var char =  parameter.charAt(i);
    var charMatches = char.match(/[A-Za-z]/);

      document.getElementById("log").innerHTML = document.getElementById("log").innerHTML +  char +"("+char.charCodeAt(0).totalDigits(3)+")"+ " -> " + char.toLowerCase() +"("+char.toLowerCase().charCodeAt(0).totalDigits(3)+") => ";

    if (charMatches) {  //kein sonderzeichen
      var charLowerCase = char.toLowerCase();
      var charLowerCaseCharCode = charLowerCase.charCodeAt(0);
      var encryptedCharCharcodeInAlphabet = (charLowerCaseCharCode-97+13)%26;
      var encryptedCharCharcodeASCII = encryptedCharCharcodeInAlphabet + 97;
      var encryptedChar = String.fromCharCode(encryptedCharCharcodeASCII);

      document.getElementById("log").innerHTML = document.getElementById("log").innerHTML + "("+charLowerCaseCharCode.totalDigits(3) +"-97+13)%26 = "   + encryptedCharCharcodeInAlphabet.totalDigits(3) + " + 97 = " + encryptedCharCharcodeASCII.totalDigits(3) + ": " + encryptedChar;

      parameter = parameter.replaceAt(i, encryptedChar);
    }
    document.getElementById("log").innerHTML = document.getElementById("log").innerHTML + "\n"

  }
  //alert(parameter);
  return parameter;
 };

