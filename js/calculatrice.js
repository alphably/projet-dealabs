
var chiffre = document.getElementsByClassName('chiffre');
var operateur = document.getElementsByClassName('operateur');
var screen = document.getElementById('screen');
var egale = document.getElementById('egale');
var operande1 = 0, operande2 = 0, op = '';

let clicked = 0;
for (i = 0; i < chiffre.length; i++) {
    
    chiffre[i].addEventListener('click', function (e) {
        //console.log(e.target);
        clicked++;
  
        screen.value += e.target.textContent;

        if(clicked > 1){

            operande2 = e.target.textContent;

        }else {

            operande1 = e.target.textContent;
    
        }
        
        console.log("number clicked :"+ clicked);

       // clicked = 0;

       /*

        if(op != '')
        {
            operande2 = screen.value;
        }

        */
    });

}

for (i = 0; i < operateur.length; i++) {

    operateur[i].addEventListener('click', function (e) {

        screen.value += e.target.textContent;

        // récupération  de la première operande
        //operande1 = screen.value;
        
        // récuperation de l'opérateur
        op = e.target.textContent;

        //effaccement de l'ecran
        //screen.value = ' ';

    });
}

function addition(nb1, nb2) {

    screen.value = nb1 + nb2
    console.log(screen.value);
    
}

function soustration(nb1, nb2) {
    var resultat = (nb1 > nb2) ? nb1 - nb2 : nb2 - nb1;
    screen.value = resultat;
}

function multilication(nb1, nb2) {
    screen.value = nb1 * nb2
    
}

function division(nb1, nb2) {

    if (nb2 == 0) {
        alert('La division par zéro est impossible');
    }
    
    screen.value = nb1 / nb2
    
}

function modulo(nb1, nb2) {
        
    screen.value = nb1 % nb2
        
}

egale.addEventListener('click', function () {

    
    // parse des operandes
    operande1 = parseInt(operande1);
    operande2 = parseInt(operande2);
    
    console.log('operande 1 :' + operande1);
    console.log('operande 2 :' + operande2);
    console.log(op);
    switch (op) {
        case '+':
            //addition(operande1, operande2);
            console.log(operande1 + operande2)
            screen.value =  operande1 + operande2;

            break;
        case '-':
            soustration(operande1, operande2);
            //console.log(nombre1-nombre2)
            break;
        case '*':
            multilication(operande1, operande2);
            //console.log(nombre1*nombre2)
            break;
        case '/':
            division(operande1, operande2);
            //console.log(nombre1 / nombre2)
            break;
        case '/':
            modulo(operande1, operande2);
            //console.log(nombre1 / nombre2)
            break;
    }

});
