cumle = prompt("Bir cümle girin:");

const harfSay = {};

for (let i = 0; i < cumle.length; i++) {
  const say = cumle[i].toLowerCase();
  
  if ((say >= 'a' && say <= 'z')) {
    if (harfSay[say] === undefined) {
      harfSay[say] = 1;
    } else {
      harfSay[say]++;
    }
  }
}

console.log("Harf tekrarları:");
for (let sayi in harfSay) {
  console.log(sayi + ": " + harfSay[sayi]);
}