var count = 0;
var player = "";
var tableau = [[1, 2, 3], 
				[4, 5, 6],
			 	[7, 8, 9]];


$("td").click(function() {
	
	var icone = $(this).attr('style');
		
		if (icone === undefined) {

			count++;		
			player =   (count % 2 === 0) ? 'player2' : 'player1';

			var nmCol = $(this).index();
			var nmRow = $(this).parent().index();

			if (player === "player1") { 
				$(this).css("background","white url(croix.png) no-repeat center");
				tableau[nmCol][nmRow] = "player1" ;
			
			}else{	
				$(this).css("background","white url(rond.png) no-repeat center");
				tableau[nmCol][nmRow] = "player2" ;
			}       
			
		}
		
		if (tableau[0][0]===tableau[1][0] && tableau[1][0]===tableau[2][0] ){
			alert("vous avez gagné");
		}

		if (tableau[0][1]===tableau[1][1] && tableau[1][1]===tableau[2][1] ){
			alert("vous avez gagné");
		}

		if (tableau[0][2]===tableau[1][2] && tableau[1][2]===tableau[2][2] ){
			alert("vous avez gagné");
		}

		if (tableau[0][0]===tableau[0][1] && tableau[0][1]===tableau[0][2] ){
			alert("vous avez gagné");
		}

		if (tableau[1][0]===tableau[1][1] && tableau[1][1]===tableau[1][2] ){
			alert("vous avez gagné");
		}

		if (tableau[2][0]===tableau[2][1] && tableau[2][1]===tableau[2][2] ){
			alert("vous avez gagné");
		}

		if (tableau[0][0]===tableau[1][1] && tableau[1][1]===tableau[2][2] ){
			alert("vous avez gagné");
		}

		if (tableau[2][0]===tableau[1][1] && tableau[1][1]===tableau[0][2] ){
			alert("vous avez gagné");
		}
});











