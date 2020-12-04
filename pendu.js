var dictionnaire = ["SOLEIL", "OCEAN", "PELUCHE", "NOEL"];
var lettresMot = [];
var lettreMotAffiche = [];

function initialization(){
    $('#startgame').css('display','none');
    $('#ingame').css('display','block');
    $('div#motatrouver').text(selectMot);
}

function selectMot(){
    var mot ="";
    mot=  dictionnaire[Math.floor(Math.random() * Math.floor(dictionnaire.length))];
    
    var motHide="";
        //// creation du tableau mot entier
    for (i = 0; i< mot.length; i++) {
        lettresMot[i] = mot.charAt(i);
        lettreMotAffiche[i] = mot.charAt(i);
    }

        //// creation du tableau du mot a afficher avec _
    //lettreMotAffiche= lettresMot;
    //console.log(lettreMotAffiche[1])
    for (i = 1; i< lettreMotAffiche.length -1; i++) {
        lettreMotAffiche[i] = "_";
    }
    
    motHide = hiddenMot();
    return motHide;
}

function hiddenMot(){
    var motHide="";
        ////former le motHide a partir du tableau du mot a afficher
    for (i = 0; i< lettreMotAffiche.length; i++) {
        motHide = motHide + lettreMotAffiche[i] + " ";
    }
    return motHide;
}


function replay(){
    $('#startgame').css('display','block'),
    $('#ingame').css('display','non')
}

function playLetter(letter){
    //console.log('je suis une lettre ' + letter);
    //console.log(lettresMot[0] + " " + lettresMot[1])
    //console.log(lettreMotAffiche[0] + " " + lettreMotAffiche[1])
    for (i = 1; i< lettresMot.length; i++) {
        
        if (lettresMot[i]==letter){
            //console.log("je suis la lettre identique "+letter)
            lettreMotAffiche[i]=letter;
        }
    }
    $('div#motatrouver').text(hiddenMot);
}



$(document).ready(function() {
    $('button#startbutton').on('click', initialization);
    $('button#replay').on('click', replay);
    $('button#lettreA').on('click', function() {playLetter("A");} );
    $('button#lettreB').on('click', function() {playLetter('B');} );
    $('button#lettreC').on('click', function() {playLetter('C');} );
    $('button#lettreD').on('click', function() {playLetter('D');} );
    $('button#lettreE').on('click', function() {playLetter('E');} );
    $('button#lettreF').on('click', function() {playLetter('F');} );
    $('button#lettreG').on('click', function() {playLetter('G');} );
    $('button#lettreH').on('click', function() {playLetter('H');} );
    $('button#lettreI').on('click', function() {playLetter('I');} );
    $('button#lettreJ').on('click', function() {playLetter('J');} );
    $('button#lettreK').on('click', function() {playLetter('K');} );
    $('button#lettreL').on('click', function() {playLetter('L');} );
    $('button#lettreM').on('click', function() {playLetter('M');} );
    $('button#lettreN').on('click', function() {playLetter('N');} );
    $('button#lettreO').on('click', function() {playLetter("O");} );
    $('button#lettreP').on('click', function() {playLetter('P');} );
    $('button#lettreQ').on('click', function() {playLetter('Q');} );
    $('button#lettreR').on('click', function() {playLetter('R');} );
    $('button#lettreS').on('click', function() {playLetter('S');} );
    $('button#lettreT').on('click', function() {playLetter('T');} );
    $('button#lettreU').on('click', function() {playLetter('U');} );
    $('button#lettreV').on('click', function() {playLetter('V');} );
    $('button#lettreW').on('click', function() {playLetter('W');} );
    $('button#lettreX').on('click', function() {playLetter('X');} );
    $('button#lettreY').on('click', function() {playLetter('Y');} );
    $('button#lettrez').on('click', function() {playLetter('Z');} );
})
