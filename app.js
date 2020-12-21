let proposition = prompt('donne trois lettres parmis A B C D E');

//Creation de la reponse.
let arrayLettres = ['A', 'B', 'C', 'D', 'E'];

let reponse = [];
for(let i = 0; i < 3; i++){
    reponse[i] = arrayLettres[Math.floor((Math.random() * 5) + 0)];
}
let element = document.getElementById('yes');

let correction = [];

function mastermind(){
    for(let y = 2; y >= 0; y--){
        
        for(let i = 0; i < 3; i++){
            if(reponse.includes(proposition[i])){
                if(proposition[i] == reponse[i]){
                    correction[i] = 'oui';
                } else{
                    correction[i] = 'presque';
                }
            } else if(!reponse.includes(proposition[i])){
                correction[i] = 'non';
            }
        }

        if(correction[0] == 'oui' && correction[1] == 'oui' && correction[2] == 'oui'){
            alert('OK');
            return;
        }
        else if (y == 0){
            alert('KO' + '\r\n' + 'Refresh la page pour relancer une partie');
             return;
        }
        proposition = prompt('Votre proposition précédente : ' + proposition + '\r\n' + correction[0] + ',' + correction[1] + ',' + correction[2]);
    }
}

mastermind();
