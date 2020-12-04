var dictionnaire = ["soleil", "ocean", "peluche", "noel"]

function displayBlocks(){
    $('div#startgame').css("display","none");
    $('div#ingame').css("display","block");
}

function selectMot(){
    var mot ="";
    mot=  dictionnaire[Math.floor(Math.random() * Math.floor(dictionnaire.length))];
    console.log(mot);
    displayBlocks()
    return mot;
}


$('button#startbutton').on('click', $('div#motatrouver').text(selectMot()));

