/*  
    1) Chiedi all'utente il suo nome,
    2) poi chiedi il suo cognome,
    3) poi chiedi il suo colore preferito,
    4) infine scrivi sulla pagina nomecognomecolorepreferito21
*/

const nomeUtente = prompt("Hello, please enter your name ?");
console.log(nomeUtente);

const cognomeUtente = prompt("Please enter your surname?");
console.log(cognomeUtente);

const colorePreferito = prompt("Please enter your favourite color ?");
console.log(colorePreferito);

const etàUtente = prompt("Please enter your age ?");
console.log(etàUtente);

let passwordUtente =`${nomeUtente}${cognomeUtente}${colorePreferito}${etàUtente}`;

document.getElementById("password_generator").innerHTML = "Your password is: " + passwordUtente;



function password() {
    let nomeUtente_2 = prompt("Hello, please enter your name ?");
    
    let cognomeUtente_2 = prompt("Please enter your surname?");
    
    let colorePreferito_2 = prompt("Please enter your favourite color ?");
    
    let etàUtente_2 = prompt("Please enter your age ?");
    
    if (nomeUtente_2 && cognomeUtente && colorePreferito_2 && etàUtente_2 != null){
    document.getElementById("password_generator_2").innerHTML = "Your password is: " + nomeUtente_2 + cognomeUtente_2 + colorePreferito_2 + etàUtente_2 + " ... How are ready for scam?";
    }
}
