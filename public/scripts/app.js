/*
Centennial College
Date:10/01/2021  
Eduardo Escobar #301081088
COMP:229 SEC:15
PROFESSOR: Aderson Oliveira
*/

// IIFE -- Imediately Invoked Function Expression

(function(){
    
    function Start(){
        console.log("App Started...");

        let deleteButtons = document.querySelectorAll('.btn-danger');

        for(button of deleteButtons) {
            button.addEventListener('click', (event) => {
                if (!confirm("Are you sure?")){
                    event.preventDefault();
                }
            });
        }
        
    }

    window.addEventListener("load", Start);

})();