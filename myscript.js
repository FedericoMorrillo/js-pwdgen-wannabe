 // assegnamo la variabile al p tramite l' id 
 const elementNome = document.getElementById ('nome');
 const elementCognome = document.getElementById ('cognome');
 const elementColore = document.getElementById ('colore');
 const elementPassword = document.getElementById ('password');

 //la variabile sostituisce dento il file html il contenuto con questo riportato
 elementNome.innerHTML = 'il tuo nome';
 elementCognome.innerHTML = 'il tuo cognome';
 elementColore.innerHTML = 'il tuo colore preferito';
 elementPassword.innerHTML = 'password generata';

 // stampiamo sulla console 
 console.log(elementNome);
 console.log(elementCognome);
 console.log(elementColore);
 console.log(elementPassword);

//assegniamo un valore a degli input
const nomeInput = prompt ('inserisci il tuo nome');
const cognomeInput = prompt ('inserisci il tuo cognome');
const coloreInput = prompt ('inserisci il tuo colore preferito');

// rimpiaziamo il valore di prima con il valore datogli con l' input
elementNome.innerHTML = nomeInput;
elementCognome.innerHTML = cognomeInput;
elementColore.innerHTML = coloreInput;
elementPassword.innerHTML = nomeInput + cognomeInput + coloreInput + 21;

// uniamo i valori per formare la password
const password = nomeInput + cognomeInput + coloreInput + 21;

console.log(password);