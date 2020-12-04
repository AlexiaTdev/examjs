var dictionnaire = ["soleil", "ocean", "peluche", "noel"];
var lettresMot = [];
var lettreMotAffiche = [];

function initialization(){
    $('#startgame').css('display','none');
    $('#ingame').css('display','block');
    $('div#motatrouver').text(selectMot())
}

function selectMot(){
    var mot ="";
    mot=  dictionnaire[Math.floor(Math.random() * Math.floor(dictionnaire.length))];
    console.log(mot);
    var motHide = hiddenMot(mot);
    return motHide;
}

function hiddenMot(mot){
    var motHide="";
    for (i = 0; i< mot.length; i++) {
        lettresMot[i] = mot.charAt(i);
    }
    motHide = lettresMot[0];
    for (i = 0; i< mot.length - 2; i++) {
        motHide = motHide + " _";
    }
    motHide = motHide + " " +lettresMot[mot.length - 1];
    return motHide;
}


function replay(){
    $('#startgame').css('display','block'),
    $('#ingame').css('display','non')
}

function playLetter(){
    console.log('je suis une lettre')
}

$(document).ready(function() {
    $('button#startbutton').on('click', initialization);
    $('button#replay').on('click', replay);

    //buttonlettres
    //$('button#lettreA').on('click', playLetter());
});
