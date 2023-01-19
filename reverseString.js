// 2- Belirli bir string ifadenin tersini bulan fonksiyonu yazınız?
// console.log(reverseString('hello world')) // output: dlrow olleh

const metin = "hello world";

function reverseString(metin) {
  for (let i = metin.length - 1; i >= 0; i--) {
    console.log(metin[i]);
  }
}
reverseString(metin);
