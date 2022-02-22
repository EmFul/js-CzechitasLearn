console.log("ahoj");
// takhle se pise komentar na jeden radek
/*takhle 
viceradkovy*/

 let minutVHodine=60;
 let hodinVeDne=24;
 let dnuVLednu=31;

 let vysledek= minutVHodine*hodinVeDne*dnuVLednu
 console.log(vysledek)

let jmeno='Marie'
let vahavkg=50;
let vyska=1.67;
let vek=25;
let bmi=vahavkg/vyska**2
console.log(bmi)
console.log('jmenuji se ' +jmeno+ ' je mi '+vek+' let a vazim  '+vahavkg+' kg merim '+vyska+' m a moje BMI je '+bmi )

let a=1
let b=2
console.log(a>b)


let jmeno=prompt("Jak se jmenujes?");
let vek = Number (prompt("Kolik ti je let?"))


if (vek >=18) {console.log("Vase jmeno je "+jmeno+" je Vam "+vek+ " a tak muzes ridit")} else {console.log("Vase jmeno je" +jmeno+" a je Vam " +vek+ "musite pockat jeste")};