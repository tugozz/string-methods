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

// const too = [1, 2, 3, 4, 5, 6, 7, 8];

// const element = too.slice (2, 5);

// console.log(element);

// Даалгавар 3:
// Өгөгдсөн тоон массивийн сүүлийн 3 элементийг slice() ашиглан буцаа.


// const too = [1, 2, 3, 4, 5, 6, 7, 8, 9, 11, 12];

// const element =too.slice(-3);

// console.log(element);

// 10. splice() (Массивыг өөрчлөх)

// Даалгавар 1:
// Өгөгдсөн массивийн 3 дахь элементийг устга.

// const array = [1, 2,  3, 4, 5 ,6];

// array.splice(2, 1);

// console.log(array);


// Даалгавар 2:
// Өгөгдсөн массивийн 2 дахь байрлалд "шинэ" гэсэн утга оруул.

// const array = [1, 2,  3, 4, 5 ,6];


// array.splice (1, 2, "new" );

// console.log(array);

// Даалгавар 3:
// Өгөгдсөн массивийн сүүлийн 2 элементийг устга.

// const numbers = [1, 3, 5, 6, 7, 8, ,9 ];

// numbers.splice (-3);

// console.log(numbers);


// 11. push() (Шинэ элемент нэмэх)

// Даалгавар 1:
// Өгөгдсөн массивийн төгсгөлд "шинэ" гэсэн элемент нэм.

// const numbers = [ 1, 3, 5, 6 , 7 , 8,9];

// numbers.push ( "new");

// console.log(numbers);

// Даалгавар 2:
// Хоосон массив үүсгээд дараалан 5 элемент push() ашиглан нэм.

// const numbers = [];

// numbers.push(1)
// numbers.push(2);
// numbers.push(3);
// numbers.push(4);
// numbers.push(5);

// console.log(numbers);


// Даалгавар 3:
// Өгөгдсөн массивийн төгсгөлд 3 шинэ тоо нэгэн зэрэг нэм.


// const numbers = [1, 2, 3, 4, 5];

// numbers.push(6, 7, 8);

// console.log(numbers);


// 12. pop() (Сүүлийн элемент устгах)

// Даалгавар 1:
// Өгөгдсөн массивийн сүүлийн элементийг устга.


// const numbers = [1, 2, 3, 4, 5, 6];

// numbers.pop(6)

// console.log(numbers);

// Даалгавар 2:
// Хоосон массив дээр pop() хэрэглэхэд юу болохыг шалгаж үр дүнг буцаа.

// const numbers = [];

// numbers.pop (1);

// console.log(numbers);


// Даалгавар 3:
// Массивийн бүх элементүүдийг нэг нэгээр нь pop() ашиглан устгаж, эцэст нь ямар утга гарахыг хар.


// const numbers = [1, 2, 3];

// numbers.pop (3);
// numbers.pop (2);
// numbers.pop (1);

// console.log(numbers);

// 13. shift() (Эхний элемент устгах)

// Даалгавар 1:
// Өгөгдсөн массивийн эхний элементийг устга.

// const numbers = [1,2 ,3];

// numbers.shift ()


// console.log(numbers);


// Даалгавар 2:
// Массивийн бүх элементүүдийг нэг нэгээр нь shift() ашиглан устгаж, эцсийн үр дүнг хар.

// const numbers = [1, 2, 3];

// numbers.shift ()
// numbers.shift ()
// numbers.shift ()

// console.log(numbers);


// Даалгавар 3:
// Хоосон массив дээр shift() хэрэглэхэд юу болохыг шалга.


// const numbers = [];

// numbers.shift ()

// console.log(numbers);

// 14. unshift() (Эхэнд шинэ элемент нэмэх)

// Даалгавар 1:
// Өгөгдсөн массивийн эхэнд "шинэ" гэсэн элемент нэм.

// const numbers = [1, 2, 3, 4];

// numbers.unshift ("new")

// console.log(numbers);

// Даалгавар 2:
// Хоосон массив үүсгээд дараалан 5 элемент unshift() ашиглан нэм.


// const numbers = []

// numbers.unshift (1)
// numbers.unshift(1);
// numbers.unshift(1);
// numbers.unshift(1);
// numbers.unshift(1);

// console.log(numbers);


// Даалгавар 3:
// Өгөгдсөн массивийн эхэнд 3 шинэ тоо нэгэн зэрэг нэм.


// const numbers = [1, 2, 3,4];

// numbers.unshift(5, 6, 7);

// console.log(numbers);

// 15. concat() (Массив нэгтгэх)

// Даалгавар 1:
// Өгөгдсөн хоёр массивыг concat() ашиглан нэг массив болгож буцаа.

// const numbers = [1, 2,3];

// const too = [4, 5, 6]

// const c = numbers.concat(too);

// console.log(c);


// Даалгавар 2:
// Өгөгдсөн массив дээр нэмэлт элементүүд агуулсан массив нэмэн шинэ массив үүсгэ.

// const a = [1, 2, 3];

// const b = a.concat(4, 5, 6);

// console.log(b);


// Даалгавар 3:
// Гурван өөр массивийг concat() ашиглан нэг массив болго.


// const a = [1, 2];
// const b = [3,4];
// const c = [5, 6];

// const x = a.concat(b + c);

// console.log(x);


// 16. includes() (Элемент байгаа эсэхийг шалгах)

// Даалгавар 1:
// Өгөгдсөн массив дотор "apple" байгаа эсэхийг includes() ашиглан шалга.

// const array = ["apple", "banana", "cider"];

// const x = array.includes("apple");

// console.log(x);

// Даалгавар 2:
// Өгөгдсөн тоон массив дотор 100 байгаа эсэхийг шалгаад, хэрэв байвал "Байна", байхгүй бол "Байхгүй" гэж буцаа.

// const array = [ 101];


//  if (array.includes(101)) {
//     "baihgu"

// }

// console.log(array);

// Даалгавар 3:
// Өгөгдсөн үгийн массив дотор "JavaScript" байгаа эсэхийг шалгаад үр дүнг консолд хэвлэ.

// const elements = ["Javascript", "llar", "hi"];

// console.log([elements.includes("Javascript")]);


// 17. indexOf() (Элементийн байрлалыг олох)

// Даалгавар 1:
// Өгөгдсөн массив дотор "banana" хэддүгээр индекс дээр байгааг олж буцаа.


// const array = ["banana", "apple", "hi"];

// const idx = array.indexOf(("banana"))

// console.log(idx);

// Даалгавар 2:
// Өгөгдсөн массив дотор 50 тоо байвал түүний индексийг буцаа, байхгүй бол -1 гэж буцаа.

// const p = [ 51, 52, 53];

// const x = p.indexOf((50));

// console.log(x);


// Даалгавар 3:
// Өгөгдсөн массив дотор "apple" хоёр удаа байвал эхний гарч ирсэн индексийг буцаа.


// const array = ["hha", "apple", "banana"];

// const chec =array.indexOf(("apple"))

// console.log(chec);


// 18. lastIndexOf() (Сүүлийн байрлалыг олох)

// Даалгавар 1:
// Өгөгдсөн массив дотор "orange" сүүлд хэддүгээр индекс дээр гарч ирснийг буцаа.

// const a = ["hah", "lmao", "orange", "jj"];

// const x = a.lastIndexOf(("orange"));

// console.log(x);


// Даалгавар 2:
// Өгөгдсөн массив дотор 10 тоо сүүлд хэдэн индекс дээр байгааг олоод буцаа.

// const a = [10, 2, 1, 11, 4, 6];

// const b =a.lastIndexOf('10')

// console.log(b);

// Даалгавар 3:
// Өгөгдсөн массив дотор "apple" олон удаа байвал хамгийн сүүлийн байрлалыг нь олж буцаа.

// const names = ["apple", "banana", "apple", "hha"];

// const idx = names.lastIndexOf("apple")

// console.log(idx);

// 19. join() (Элементийг нэгтгэн мөр болгох)

// Даалгавар 1:
// Өгөгдсөн массивын бүх элементийг " - " гэсэн тэмдэгт ашиглан нэг мөр болгон буцаа.

// const names = ["apple", "alaa", "kakaka" ];

// names.join(" - ");

// console.log(names);


// Даалгавар 2:
// Өгөгдсөн массивыг join() ашиглан таслал (", ") бүхий нэг өгүүлбэр болго.

// const names = ["hi", "hello", "zaazaa"];

// names.join(", ")

// console.log(names);

// Даалгавар 3:
// Өгөгдсөн массивын бүх элементүүдийг " | " тэмдэгтээр холбоод, мөр буцаа.

// const names = ["hi", "hello", "zaazaa"];

// names.join(" | ");

// console.log(names);

// 20. reverse() (Массивыг урвуу болгох)

// Даалгавар 1:
// Өгөгдсөн массивын бүх элементүүдийг урвуу дарааллаар эрэмбэлж буцаа.


// const array = [1, 2, 3, 4, 5, 6, 7];

// const idx = array.reverse();

// console.log(idx);

// Даалгавар 2:
// Өгөгдсөн ["a", "b", "c", "d"] массивыг reverse() ашиглан буцаа.

// let idx =  ["a", "b", "c", "d"];

// let p = [...idx].reverse()

// console.log(idx);


// Даалгавар 3:
// Өгөгдсөн тоон массивыг урвуу эрэмбэлж буцаа.

// let idx = [1, 2, 4, 5, 6, 8];

// let p = [...idx].reverse()

// console.log(p);

// 21. fill() (Массивын элементийг шинэ утгаар дүүргэх)

// Даалгавар 1:
// Хоосон массив үүсгээд fill() ашиглан "A" үсгээр бүх элементийг дүүргээд буцаа.

// const too = [];

// too.fill('a');

// console.log(too);

// Даалгавар 2:
// Өгөгдсөн 10 элементийн массивын эхний 5-ыг "X" үсгээр дүүргэ.

// const element = [1,2,3,4,5,6,7,8,9,10];

// element.fill('a', 0, 4);

// console.log(element);


// Даалгавар 3:
// Өгөгдсөн тоон массивын сүүлийн 3 элементийг 0 болгож солиод шинэ массив буцаа.

// const too = [1, 2, 4, 5, 6 , 7, 8,9];

// too.fill('0', 5,8);

// console.log(too);

// 22. flat() (Олон давхар массивыг нэг түвшин болгох)

// Даалгавар 1:
// Өгөгдсөн [1, [2, [3, [4, 5]]]] массивыг нэг түвшин болгож буцаа.

// const too = [1, [2, [3, [4, 5]]]];

// const res = too.flat(3);

// console.log(res);



// Даалгавар 2:
// Олон давхар массив ([[1, 2], [3, 4], [5, [6, 7]]]) -ыг нэг түвшин болгон flat() ашиглан буцаа.

// const too = [
//   [1, 2],
//   [3, 4],
//   [5, [6, 7]],
// ];

// const array = too.flat(3);

// console.log(array);

// Даалгавар 3:
// Өгөгдсөн массив дотор 3 түвшинтэй дэд массив байвал flat(2) ашиглан хоёр давхарга тайлж буцаа.


// const too = [
//   [1, 2],
//   [3, 4],
//   [5, [6, 7]],
// ];

// const res = too.flat(2)

// console.log(res);

// 23. flatMap() (Нэгтгэх ба хувиргах)

// Даалгавар 1:
// Өгөгдсөн массив дотор "a b" гэсэн үг байгаа бол flatMap() ашиглан "a" болон "b" болгон хувиргаад шинэ массив буцаа.



// const array = ["a b", "c", "d"];
// const result = array.flatMap(item => item.split(' '));
// console.log(result);


// Даалгавар 2:
// Өгөгдсөн массив дотор ["one", "two three"] байгаа бол flatMap() ашиглан "one", "two", "three" болгон хувирга.

// const too = ["one", "two three"];

// const result = too.flatMap(item => item.split(" "));

// console.log(result);

// Даалгавар 3:
// Объект массив дотор "name": "Ариун" байгаа бол flatMap() ашиглан "Ариун" гэсэн шинэ массив үүсгэ.


// const too = ["name", "Ариун"];

// const result = too.flatMap(item => item.split(" - "))

// console.log(result);


// 24. copyWithin() (Массив дотор хуулж зөөх)

// Даалгавар 1:
// Өгөгдсөн [1, 2, 3, 4, 5] массивын 0-р индексээс эхлэн 3-р индекстэй элементийг хуулж зөө.



// const too = [1, 2, 3, 4, 5];

// too.copyWithin(0, 3);

// console.log(too);


// Даалгавар 2:
// Өгөгдсөн [10, 20, 30, 40, 50]
//  массивын 2-р индекстээс эхлэн 4-р индексийн элементүүдийг 0-р индекс рүү зөө.

// const too = [10, 20, 30, 40, 50];

// too.copyWithin(0, 2, 5 );

// console.log(too);

// const too = [10, 20, 30, 40, 50];

// // First perform the copyWithin operation
// too.copyWithin(2, 4);
// // Now the array is [10, 20, 50, 40, 50]

// // Then fill the last three positions with 0
// too.fill(0, 2, 5);
// // This fills positions 2, 3, and 4 with 0

// console.log(too);


// const too = [10, 20, 30, 40, 50];
// too.fill(0, 2, 5); // Fill positions 2 through 4 with 0
// console.log(too); // [10, 20, 0, 0, 0]

// Даалгавар 3:
// Өгөгдсөн массив дотор 2-оос 4 дэх элементийг 1-р индекст байрлуул.


// 25. toSorted() (Массивыг эрэмбэлэх - sort() хувилбар)

// Даалгавар 1:
// Өгөгдсөн [3, 1, 4, 1, 5, 9] массивыг toSorted() ашиглан өсөх дарааллаар эрэмбэл.

// const array = [3, 1, 4, 1, 5, 9];

// const newArray = array.toSorted()

// console.log(newArray);

// Даалгавар 2:
// Өгөгдсөн тэмдэгт мөрийн массивыг toSorted() ашиглан цагаан толгойн дарааллаар эрэмбэл.

// const alpha = ["a", "f", "d", "c", "b"];

// const newAlpha = alpha.toSorted();

// console.log(newAlpha);

// Даалгавар 3:
// Өгөгдсөн объект массивыг toSorted() ашиглан насны өсөх дарааллаар эрэмбэл.

// const too = [66, 44, 34, 24, 11, 1];

// const newToo = too.toSorted();

// console.log(newToo);


// 26. toReversed() (Массивыг урвуу болгох - reverse() хувилбар)

// Даалгавар 1:
// Өгөгдсөн массивыг toReversed() ашиглан урвуу болго.

// const too =[2, 3, 1, 5, 4, 7, 8];

// const newToo = too.toReversed ();

// console.log(newToo);


// Даалгавар 2:
// Өгөгдсөн тоон массивыг toReversed() ашиглан буцаа.


// const too = [1, 2, 4, 5, 6, 7];

// console.log([too.toReversed()]);

// Даалгавар 3:
// Өгөгдсөн [a, b, c, d] массивыг toReversed() ашиглан буцаа.

// const too = ["a", "b", "c", "d"];

// const newToo = too.toReversed()

// console.log(newToo);


// const too = ["a", "b", "c", "d"];
// const newToo = [...too].sort().reverse();
// console.log(newToo); // ["d", "c", "b", "a"]



