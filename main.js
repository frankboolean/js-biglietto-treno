// /chiede quanti km vuole percorrere


var percorso= prompt( "salve, quanti km vuole percorrere?")

// chiede quanti anni ha
var età= prompt("la sua età?")

// moltiplicare num km per 0.21 per sapere prezzo totale
var prezzo_totale = percorso * 0.21; //("percorso" * "0.21")
console.log('il prezzo totale è ', prezzo_totale)

// se età è minore di 18 applicare 20%
if(età < 18){
  prezzo_totale = (prezzo_totale)- (prezzo_totale * 20) / 100;

} else if (età>65) {
  prezzo_totale = (prezzo_totale)- (prezzo_totale * 40) / 100;
}
// se età maggiore di 65 applicare 40%

//  dire prezzo biglietto
document.getElementById('messaggio').innerHTML = "lei paga" +  prezzo_totale;
