var dictionnaire = ["soleil", "ocean", "peluche", "noel"]

function displayBlocks(){
    $('#startgame').css('display','none');
    $('#ingame').css('display','block');
}

function selectMot(){
    var mot ="";
    mot=  dictionnaire[Math.floor(Math.random() * Math.floor(dictionnaire.length))];
    console.log(mot);
    displayBlocks();
    return mot;
}

$('button#startbutton').on('click', $('div#motatrouver').text(selectMot()));
$('#startbutton').on('click', console.log("rassuretoi je fonctionne"));

