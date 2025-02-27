// let baseURL = "https://example.com/";

// let endpoint = "api/data";

//  let combine =baseURL.concat("", endpoint);
//  console.log(combine);

// let userInput = "HeLLo WoRLD!";

// let text = userInput.toLowerCase();

// console.log(text);

// let storedPassword = "securePassword";

// let userEnteredPassword = "SECUREpassword";

// let text = storedPassword.toLowerCase();

// let text2 = userEnteredPassword.toLowerCase();

// console.log(text.toLowerCase === text2.toLowerCase);

// let message = "JavaScript is awesome!";

// let text = message.toUpperCase();

// console.log(text);

// let lastName = "john"

// const firstName = "doe"

// const lname = lastName.split(' ')

// const fname = firstName.split(' ')

// const username = `${lname[0][0]}.${fname[0]}`;
// console.log(username);

// let text ="javascript is fun";

// console.log(text.replace("j", "J"));

// let text2 = "javascript is fun";

// console.log(text2.replaceAll("i", "I"));

// let text3 = "javascript is fun";

// console.log(text3.replace("f", "F"));

// console.log(object);

// function maskEmail(email) {

//     const [username, domain] = email.split('@');

//     const firstChar = username.charAt(0);

//     const asterisks = '*'.repeat(username.length - 1);

//     return `${firstChar}${asterisks}@${domain}`;
// }

// const email = "ajfhlakdhfdhfla@example.com";
// const maskedEmail = maskEmail(email);
// console.log(maskedEmail);

// function reverseWordOrder(x) {

//     const words = x.split(' ');

//     const reversedWords = words.reverse();

//     return reversedWords.join(' ');
// }

// const originalString = "Hello world from JavaScript";
// const reversedString = reverseWordOrder(originalString);
// console.log(reversedString);

// function isPalindrome(str) {

//     const cleanStr = str.toLowerCase();

//     const reversedStr = cleanStr.split('').reverse().join('');

//     return cleanStr === reversedStr;
// }

// console.log(isPalindrome("NuN"));
// console.log(isPalindrome("javascript"));

// function toTitleCase(str) {

//     const words = str.split(' ');

//     const capitalizedWords = words.map(word => {
//         return word.charAt(0).toUpperCase() + word.slice(1);
//     });

//     return capitalizedWords.join(' ');
// }

// const originalString = "javascript is fun";
// const titleCaseString = toTitleCase(originalString);
// console.log(titleCaseString);

// const item = ["bolor", "tugu", "hha", "boo"];

// const p = item.find((n) =>n.includes("b"));

// console.log(p);

// Даалгавар 3:
// Өгөгдсөн объект массив дотор 25 настай хүнийг олж буцаа ({name: "Ариун", age: 25}).

// const people = [{name: "Ариун", age: 25}, {name: "Someone", age: 30}];

// const p = people.find((n) => n.age === 25);

// console.log(p);

// Даалгавар 1:
// Өгөгдсөн тоон массивийн бүх элементүүдийн нийлбэрийг олж буцаа.

// const numbers = [1, 2, 3, 4, 5];

// console.log(
//     numbers.reduce((accumlater, item) =>{
//         accumlater += item;
//         return accumlater
//     })
// );

// Даалгавар 2:
// Өгөгдсөн үгийн массивийг нийлүүлж нэг өгүүлбэр болго (["Сайн", "байна", "уу"] → "Сайн байна уу").

// const item = ["Сайн", "байна", "уу"];

// console.log(
//     item.reduce((accumlater, item) =>{
//         accumlater += " " + item;
//         return accumlater
//     })
// );

// Даалгавар 3:
// Өгөгдсөн тоон массив доторх хамгийн их тоог олох reduce() функц бич.

// const item = [1, 2, 3, 4, 5];

// const largest = item.reduce((max, current) => Math.max(max, current), item[0]);
// console.log(largest);

// Даалгавар 1:
// Өгөгдсөн тоон массив дотор 100-аас их тоо байгаа эсэхийг шалга.

// const item = [99, 98, 100, 1000, 101];

// console.log(item.some((item) =>item >=100 ));

// Даалгавар 2:
// Өгөгдсөн массив дотор "admin" эрхтэй хэрэглэгч байгаа эсэхийг шалга.

// const array = ["admin", "color", "blue", "ajdhfjkah"];

// console.log(array.some((item) => item === "admin"));

// Даалгавар 3:
// Өгөгдсөн тэмдэгт мөрийн массив дотор урт нь 10-аас их үг байгаа эсэхийг шалга.

// const array = [1, 2, 3, 4, 5, 6, 7, 10, 11, 12, 13];

// console.log(array.some((item) => item >=10 ));

// Даалгавар 1:
// Өгөгдсөн тоон массивийн бүх элемент 10-аас их эсэхийг шалга.

// const array = [1, 2, 3, 4, 5, 10, 11, 12];

// console.log(array.every((item) => item  === 11));

// Даалгавар 2:
// Өгөгдсөн хэрэглэгчдийн массив дотор "verified: true" бүхий бүх хэрэглэгч байгаа эсэхийг шалга.

// const array = ["verified: true", "true", "false"];

// console.log(array.every((item) => item === "verified: true"));

// Даалгавар 3:
// Өгөгдсөн үгийн массивийн бүх үг том үсгээр бичигдсэн эсэхийг шалга.

// const array = ["dfadf", "ADSFAD", "afa"];

// console.log(array.every((item) => item ===item.toUpperCase()));

// Даалгавар 1:
// Өгөгдсөн тоон массивийг өсөх дарааллаар эрэмбэл.

// const array = [11, 2, 4, 6, 7, 5];

// console.log(array.sort((a, b) => a - b));

// Даалгавар 2:
// Өгөгдсөн нэрсийн массивийг цагаан толгойн дарааллаар эрэмбэл.

// const array = ["sda", "jja", "as"];

// const sortedArray = [...array].sort((a, b) => a.localeCompare(b));

// console.log(sortedArray);

// Даалгавар 3:
// Өгөгдсөн объект массивийг ([{name: "Ариун", age: 25}, {name: "Билгүүн", age: 30}]) насны өсөх дарааллаар эрэмбэл.

// const people = [
//   { name: "Ариун", age: 25 },
//   { name: "Билгүүн", age: 30 },
// ];

// const p = people.sort((a, b) => b.age - a.age);

// console.log(p);

// Даалгавар 1:
// Өгөгдсөн тоон массивийн бүх элементийг консол дээр хэвлэ.

// const too = [1, 2, 3, 4, 5, 6];

// too.forEach((element) => {
//   console.log(element);
// });

// Даалгавар 2:
// Өгөгдсөн нэрсийн массивийн бүх нэрийн ард " - сурагч" гэсэн текст нэмэн хэвлэ.

// const array = ["naraa", "bataa", "baldan"];

// array.forEach((element) => {
//   console.log(element + "-suragch");
// });

// Даалгавар 3:
// Өгөгдсөн объект массив ([{name: "Ариун", age: 25}, {name: "Билгүүн", age: 30}]) доторх бүх хүний нэрийг консол дээр хэвлэ.

// const array = [
//   { name: "Ариун", age: 25 },
//   { name: "Билгүүн", age: 30 },
// ];

// const p = array.sort((a, b) => b.name.localeCompare(a.name));

// p.forEach((element) => {
//   console.log(element.name);
// });

// Даалгавар 1:
// Өгөгдсөн массивийн эхний 3 элементийг slice() ашиглан буцаа.

// const element = ["afadfad", 33, "name", "ada", "adfadf", 324234];
// const too = element.slice(0, 3);

// console.log(too);

// Даалгавар 2:
// Өгөгдсөн тэмдэгт мөрийн массив дотроос 2-оос 5 дахь элементийг авах функц бич.
