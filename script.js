
const userName = "Kalle";
const userPassword = "qwe123"

let formRef; // variabel.

//  funktion init lokaliserar min form element.
function init() { 
    formRef = document.querySelector("form");
    console.log(formRef);
    

    const namnInput = document.getElementById("namn"); // hittar element med id =namn
    const lösenordInput = document.getElementById("lösenord"); // hittar element med id = lösenord

    formRef.addEventListener("submit", function(event) { // övervakar submit knappen DVS om någon klickar på den så kör den functionen
        event.preventDefault(); // förhindrar att sidan laddas om utan prioriter händelsen efter att sumbit har tryckt.

        if (namnInput.value === userName && lösenordInput.value === userPassword) {  // jämför ddet duu skriver in med const variablerna
        console.log("Välkommen Kalle, du är nu inloggad!");   // oom det är rätt skriver den ut Välkommen Kalle, Du är nu  inloggad!
        }        
        else {
            console.log("Felaktiga inloggningsuppgifter!");

            namnInput.value = "";     
            lösenordInput.value = "";
            
        }
        
    

    })

    
    
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