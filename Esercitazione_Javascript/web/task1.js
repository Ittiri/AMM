/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

function stampa(event){
    
    // Prende il testo dalla textarea
    var testo = document.getElementById("testo").value;
    
    //Stampa testo
    document.getElementById("stampa").innerHTML = testo;
    
}
