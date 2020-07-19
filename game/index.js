for(var i=0;i<document.querySelectorAll(".pic").length;i++)
{
	document.querySelectorAll(".pic")[i].addEventListener("click",function(){
		var userObject=this.innerText;
		userSide(userObject);
		
		var compRandomNum = Math.floor(Math.random() * 4 )+1;
		console.log(compRandomNum);
		switch (compRandomNum) {
			case 1: var compObject="rock";
					compSide(compObject);
					break;

			case 2: var compObject="paper";
					compSide(compObject);
					break;
			
			case 3: var compObject="pencil"; 
					compSide(compObject);
					break;

			case 4: var compObject="scissors";
					compSide(compObject);
					break;
					
			default: console.log();
					break;
		}
		if(userObject==="rock" && (compObject==="pencil" || compObject==="scissors"))
		{
			var a=parseInt(document.querySelector(".your-score").innerHTML);
			document.querySelector(".your-score").innerHTML= a + 1;
		}
		else if(userObject==="rock" && compObject==="paper")
		{
			var a=parseInt(document.querySelector(".comp-score").innerHTML);
			document.querySelector(".comp-score").innerHTML= a + 1;
		}
		else if(userObject==="paper" && compObject==="rock")
		{
			var a=parseInt(document.querySelector(".your-score").innerHTML);
			document.querySelector(".your-score").innerHTML= a + 1;
		}
		else if(userObject==="paper" && (compObject==="pencil" || compObject==="scissors"))
		{
			var a=parseInt(document.querySelector(".comp-score").innerHTML);
			document.querySelector(".comp-score").innerHTML= a + 1;
		}
		else if(userObject==="pencil" && compObject==="paper")
		{
			var a=parseInt(document.querySelector(".your-score").innerHTML);
			document.querySelector(".your-score").innerHTML= a + 1;
		}
		else if(userObject==="pencil" && (compObject==="rock" || compObject==="scissors"))
		{
			var a=parseInt(document.querySelector(".comp-score").innerHTML);
			document.querySelector(".comp-score").innerHTML= a + 1;
		}
		else if(userObject==="scissors" && (compObject==="pencil" || compObject==="paper"))
		{
			var b=parseInt(document.querySelector(".your-score").innerHTML);
			document.querySelector(".your-score").innerHTML= b + 1;
		}
		else if(userObject==="scissors" && compObject==="rock")
		{
			var a=parseInt(document.querySelector(".comp-score").innerHTML);
			document.querySelector(".comp-score").innerHTML= a + 1;
		}

		var score1=parseInt(document.querySelector(".your-score").innerHTML);
		var score2=parseInt(document.querySelector(".comp-score").innerHTML);
		if(score1===10)
		{
			alert("HURRAYYY!! YOU WON THE GAME");
			location.reload();
		}
		else if(score2===10){
			alert("Unfortunately you lost the game.");
			location.reload();
		}
		
  	});
}



function userSide(userObject){
	document.querySelector(".your-selection").setAttribute("src","images/"+userObject+".png");
}

function compSide(compObject) {
	document.querySelector(".comp-selection").setAttribute("src","images/"+compObject+".png");	
}