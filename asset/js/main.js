let nomeUtente = prompt("Hello, please enter your name ?");

let cognomeUtente = prompt("Please enter your surname?");

let colorePreferito = prompt("Please enter your favourite color ?");

let etàUtente = prompt("Please enter your age ?");

document.getElementById("password_generator").innerHTML = "Your password is: " + nomeUtente + cognomeUtente + colorePreferito + etàUtente;



function password() {
    let nomeUtente_2 = prompt("Hello, please enter your name ?");
    
    let cognomeUtente_2 = prompt("Please enter your surname?");
    
    let colorePreferito_2 = prompt("Please enter your favourite color ?");
    
    let etàUtente_2 = prompt("Please enter your age ?");
    
    if (nomeUtente_2 && cognomeUtente && colorePreferito_2 && etàUtente_2 != null){
    document.getElementById("password_generator_2").innerHTML = "Your password is: " + nomeUtente_2 + cognomeUtente_2 + colorePreferito_2 + etàUtente_2 + " ... How are ready for scam?";
    }
}
