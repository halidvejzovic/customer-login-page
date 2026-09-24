
let formRef; // variabel.

//  funktion init lokaliserar min form element.
function init() { 
    formRef = document.querySelector("form");
    console.log(formRef);  // skriver ut i consol
    
    
}

// Skriver ut min function "init".
window.onload = init;












/*
addEventListener("submit") lyssnar på formuläret och väntar på att användaren ska trycka på Logga in. 
När formuläret skickas körs koden i funktionen. event.preventDefault() stoppar sidan från att laddas om, 
och sedan kan JavaScript själv kontrollera om användaren har skrivit in rätt namn och lösenord, till exempel 
"Kalle" och "qwe123".
*/


/* DOM = Document Object Model

DOM-manipulation handlar om att:

Hämta element (getElementById, querySelector)
Ändra innehåll (textContent, innerHTML)
Ändra stil (style)
Lägga till eller ta bort element (createElement, appendChild, remove)
Hantera händelser (addEventListener)
Ändra attribut (setAttribute, getAttribute) 
*/