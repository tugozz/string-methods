let baseURL = "https://example.com/";

let endpoint = "api/data";

 let combine =baseURL.concat(" ", endpoint);
 console.log(combine);


let userInput = "HeLLo WoRLD!";

let text = userInput.toLowerCase();

console.log(text);

let storedPassword = "securePassword";

let userEnteredPassword = "SECUREpassword"; 

let text = storedPassword.toLowerCase();

let text2 = userEnteredPassword.toLowerCase();

console.log(text.toLowerCase === text2.toLowerCase);


let message = "JavaScript is awesome!";

let text = message.toUpperCase();

console.log(text);

let lastName = "john"

const firstName = "doe"

const lname = lastName.split(' ')

const fname = firstName.split(' ')



const username = `${lname[0][0]}.${fname[0]}`;
console.log(username);


let text ="javascript is fun";

console.log(text.replace("j", "J"));

let text2 = "javascript is fun";

console.log(text2.replaceAll("i", "I"));

let text3 = "javascript is fun";

console.log(text3.replace("f", "F"));


console.log(object);

function maskEmail(email) {
 
    const [username, domain] = email.split('@');
    
   
    const firstChar = username.charAt(0);
    
 
    const asterisks = '*'.repeat(username.length - 1);
    
   
    return `${firstChar}${asterisks}@${domain}`;
}

const email = "hahhahh@example.com";
const maskedEmail = maskEmail(email);
console.log(maskedEmail); 


function reverseWordOrder(x) {
   
    const words = x.split(' ');
    

    const reversedWords = words.reverse();
    
   
    return reversedWords.join(' ');
}

const originalString = "Hello world from JavaScript";
const reversedString = reverseWordOrder(originalString);
console.log(reversedString); 


function isPalindrome(str) {
   
    const cleanStr = str.toLowerCase();
    
   
    const reversedStr = cleanStr.split('').reverse().join('');
    
    return cleanStr === reversedStr;
}

console.log(isPalindrome("NuN"));      
console.log(isPalindrome("javascript")); 


function toTitleCase(str) {
   
    const words = str.split(' ');
    
   
    const capitalizedWords = words.map(word => {
        return word.charAt(0).toUpperCase() + word.slice(1);
    });
    
   
    return capitalizedWords.join(' ');
}

const originalString = "javascript is fun";
const titleCaseString = toTitleCase(originalString);
console.log(titleCaseString);


