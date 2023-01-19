// 2- Belirli bir string ifadenin tersini bulan fonksiyonu yazınız?
// console.log(reverseString('hello world')) // output: dlrow olleh

let metin = "";

function reverseString(metin) {
  let str = "";
  for (let i = metin.length - 1; i >= 0; i--) {
    str += metin[i];
  }
  return str;
}
console.log(reverseString("hello world"));
