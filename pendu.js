var dictionnaire = ["ALTITUDE","PARCOURS","LONGUEUR","ORIGINAL","VICTOIRE"];
var alphabet = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
var lettresMot = [];
var lettreMotAffiche = [];
var nbrError=0;
var mot ="";

//variables environnement de jeu
var nbrErreurMaximum=4;

function initialization(){
    $('#ingame').css('display','block');
    $('div#motatrouver').text(selectMot);
}

function selectMot(){
    mot=  dictionnaire[Math.floor(Math.random() * Math.floor(dictionnaire.length))];
    var motHide="";
        //// creation du tableau mot entier
    for (i = 0; i< mot.length; i++) {
        lettresMot[i] = mot.charAt(i);
        lettreMotAffiche[i] = mot.charAt(i);
    }
        //// creation du tableau du mot a afficher avec _
    for (i = 1; i< lettreMotAffiche.length -1; i++) {
        lettreMotAffiche[i] = "_";
    }
    motHide = hiddenMot();
    return motHide;
}

function hiddenMot(){
    var motHide="";
    for (i = 0; i< lettreMotAffiche.length; i++) {
        motHide = motHide + lettreMotAffiche[i] + " ";
    }
    return motHide;
}

function replay(){
    $('div#erreurs').text("");
    $('div#resultat').text("");
    for (const i in alphabet) {
        $('button#lettre'+alphabet[i]).prop( "disabled", false);
    }
    nbrError=0;
    initialization();
}

function playLetter(letter){
    var lettretrouvee = false;
    $('button#lettre'+letter).prop( "disabled", true );
    for (i = 1; i< lettresMot.length-1; i++) {
        if (lettresMot[i]==letter){
            lettreMotAffiche[i]=letter;
            lettretrouvee =true;
        }
    }
    if (!lettretrouvee){
        error();
    }else {
        verifierSiMotTrouve()
    }
    
    $('div#motatrouver').text(hiddenMot);
}

function verifierSiMotTrouve(){
    motidentique = true;
    for (i = 1; i< lettreMotAffiche.length-1; i++) {
        if (lettreMotAffiche[i] != lettresMot[i]) {
            motidentique = false;
        }
    }
    if (motidentique){
        afficherResultat(true);
    }
}

function error(){
    nbrError=nbrError+1;
    if (nbrError < nbrErreurMaximum){
    $('div#erreurs').prepend("Erreur "+nbrError+"\/"+nbrErreurMaximum+"</br>");
    } else {
        afficherResultat(false);
    }
}

function afficherResultat(resultat){
    for (const i in alphabet) {
        $('button#lettre'+alphabet[i]).prop( "disabled", true );
    }
    if (resultat==true){
        $('div#resultat').text("BRAVO Le mot a trouver etait bien "+ mot);
        afficherScoreBoard();
    }else {
        $('div#resultat').text("PERDU Le mot à trouver était "+ mot);
    }
}

function afficherScoreBoard(){
    var request = new XMLHttpRequest();
    request.open("GET", "score.json", false);
    request.send(null)
    var my_JSON_object = JSON.parse(request.responseText);


    var p = document.getElementById('scoreBoard');
    var premiereligne = document.createElement('table');
    var tr = document.createElement('tr');
    var th = document.createElement('th');

    th.textContent = "NAME";
    tr.append(th);
    var th2 = document.createElement('th');
    th2.textContent = "SCORE";
    tr.append(th2);
    //on ajoute la ligne header du tableau
    premiereligne.append(tr);


    //on ajoute une ligne par element du json
    for (key in my_JSON_object){
        var trInt = document.createElement('tr');

        var info = document.createElement('td');
        info.textContent = key;
        trInt.append(info);

        var info2 = document.createElement('td');
        info2.textContent = my_JSON_object[key];
        console.log(my_JSON_object[key]);
        trInt.append(info2);

        premiereligne.append(trInt);
    }

    p.append(premiereligne);
}


$(document).ready(function() {
    initialization();
    $('button#replay').on('click', replay);
    for (const i in alphabet) {
        $('button#lettre'+alphabet[i]).on('click', function() {playLetter(alphabet[i]);} );
    }   
})
