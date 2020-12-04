var dictionnaire = ["SOLEIL", "OCEAN", "PELUCHE", "NOEL", "BATTRE"];
var lettresMot = [];
var lettreMotAffiche = [];
var nbrError=0;

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
	$('div#erreurs').empty();
	$('div#resultat').empty();
	$('#ingame').css('display','none');
	enabledAllLetters();
	nbrError=0;
    $('#startgame').css('display','block')
    $('#ingame').css('display','non')
}

function playLetter(letter){
    //console.log('je suis une lettre ' + letter);
    //console.log(lettresMot[0] + " " + lettresMot[1])
    //console.log(lettreMotAffiche[0] + " " + lettreMotAffiche[1])
    var lettretrouvee = false;
    $('button#lettre'+letter).prop( "disabled", true );
    for (i = 1; i< lettresMot.length; i++) {
        
        if (lettresMot[i]==letter){
            //console.log("je suis la lettre identique "+letter)
            lettreMotAffiche[i]=letter;
            lettretrouvee =true;
        }
    }
    if (!lettretrouvee){
        error();
    }else{
    	$('div#erreurs').empty();
    	$('div#erreurs').prepend("Bien joué !");
    }
    $('div#motatrouver').text(hiddenMot);
}

function gagne(){
	desabledAllLetters();
	$('div#resultat').append("GAGNE !!!!!!");
}

function enabledAllLetters(){
	$('button#lettreA').prop( "disabled", false );
	$('button#lettreB').prop( "disabled", false );
	$('button#lettreC').prop( "disabled", false );
	$('button#lettreD').prop( "disabled", false );
	$('button#lettreE').prop( "disabled", false );
	$('button#lettreF').prop( "disabled", false );
	$('button#lettreG').prop( "disabled", false );
	$('button#lettreH').prop( "disabled", false );
	$('button#lettreI').prop( "disabled", false );
	$('button#lettreJ').prop( "disabled", false );
	$('button#lettreK').prop( "disabled", false );
	$('button#lettreL').prop( "disabled", false );
	$('button#lettreM').prop( "disabled", false );
	$('button#lettreN').prop( "disabled", false );
	$('button#lettreO').prop( "disabled", false );
	$('button#lettreP').prop( "disabled", false );
	$('button#lettreQ').prop( "disabled", false );
	$('button#lettreR').prop( "disabled", false );
	$('button#lettreS').prop( "disabled", false );
	$('button#lettreT').prop( "disabled", false );
	$('button#lettreU').prop( "disabled", false );
	$('button#lettreV').prop( "disabled", false );
	$('button#lettreW').prop( "disabled", false );
	$('button#lettreX').prop( "disabled", false );
	$('button#lettreY').prop( "disabled", false );
	$('button#lettreZ').prop( "disabled", false );
}

function desabledAllLetters(){
	$('button#lettreA').prop( "disabled", true );
	$('button#lettreB').prop( "disabled", true );
	$('button#lettreC').prop( "disabled", true );
	$('button#lettreD').prop( "disabled", true );
	$('button#lettreE').prop( "disabled", true );
	$('button#lettreF').prop( "disabled", true );
	$('button#lettreG').prop( "disabled", true );
	$('button#lettreH').prop( "disabled", true );
	$('button#lettreI').prop( "disabled", true );
	$('button#lettreJ').prop( "disabled", true );
	$('button#lettreK').prop( "disabled", true );
	$('button#lettreL').prop( "disabled", true );
	$('button#lettreM').prop( "disabled", true );
	$('button#lettreN').prop( "disabled", true );
	$('button#lettreO').prop( "disabled", true );
	$('button#lettreP').prop( "disabled", true );
	$('button#lettreQ').prop( "disabled", true );
	$('button#lettreR').prop( "disabled", true );
	$('button#lettreS').prop( "disabled", true );
	$('button#lettreT').prop( "disabled", true );
	$('button#lettreU').prop( "disabled", true );
	$('button#lettreV').prop( "disabled", true );
	$('button#lettreW').prop( "disabled", true );
	$('button#lettreX').prop( "disabled", true );
	$('button#lettreY').prop( "disabled", true );
	$('button#lettreZ').prop( "disabled", true );
}

function error(){
    nbrError=nbrError+1;
    $('div#erreurs').empty();
    $('div#erreurs').prepend("Erreur vous etes mauvais");
    if (nbrError==2){
    	desabledAllLetters();
        $('div#resultat').append("PERDU");
    }
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
