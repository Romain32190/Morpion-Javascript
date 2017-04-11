  var count = 0;
  var player;

  $("td").click(function()
  {

    var triche=$(this).html();

    if(triche){
    return;
    }
    
    count++
    if (count % 2 === 0)
    {
        $(this).html("<center><img src=https://iut-info.univ-reims.fr/users/cutrona/intranet/progwebS2-old/morpion/rond.png></center>"); 
    }
    else
    {
        $(this).html("<center><img src=http://www.icône.com/images/icones/2/6/checkmark.png></center>");
    }

});





