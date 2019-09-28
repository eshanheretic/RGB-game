var colors =generatecol(6);
var squares=document.querySelectorAll(".square");
var a=pickcol();
var wincolor =colors[a];
var colorDisplay=document.querySelector("span");
var message =document.querySelector("#message");
var h1=document.querySelector("h1");
var easy=document.querySelector("#easy");
var hard=document.querySelector("#hard");
easy.addEventListener("click",function()
{
	easy.classList.add("selected");
	hard.classList.remove("selected");
	colors =generatecol(3);
	a=pickcol();
	wincolor =colors[a];
	for(var i=0;i<squares.length;i++)
	{	if(i<3)
		squares[i].style.backgroundColor=colors[i];
		else
		squares[i].style.display="none";
	}
})
hard.addEventListener("click",function()
{
	hard.classList.add("selected");
	easy.classList.remove("selected");
	colors =generatecol(6);
	a=pickcol();
	wincolor =colors[a];
	for(var i=0;i<squares.length;i++)
	{
		squares[i].style.backgroundColor=colors[i];
		if(i>=3)
		{
			squares[i].style.display="block";
		}
	}
})
var reset=document.querySelector("#reset");
reset.addEventListener("click",function()
{	reset.textContent="New Game";
	colors =generatecol(6);	
	a=pickcol();
	h1.style.backgroundColor="steelblue";
	wincolor=colors[a];
	colorDisplay.textContent=colors[a];
	message.textContent="";
	hard.classList.add("selected");
	easy.classList.remove("selected");
	for(var i=0; i<squares.length;i++)
	{
		squares[i].style.backgroundColor=colors[i];
		squares[i].style.display="block";
	}
}
);
colorDisplay.textContent=wincolor;
for(var i=0; i<squares.length;i++)
{
	squares[i].style.backgroundColor=colors[i];	
	squares[i].addEventListener("click",function()
	{
		var pickcolor=this.style.backgroundColor;
			if(pickcolor===wincolor)
			{
			message.textContent="Correct!";
			allcol(wincolor);
			h1.style.backgroundColor=wincolor;
			reset.textContent="Play again ?";
			}
		else
			{this.style.backgroundColor="#232323";
			message.textContent="Try again !";
			}		
}
		);
}
function allcol(color)
{
	for(var i=0;i<squares.length;i++)
	{
		squares[i].style.backgroundColor=color;
	}
}
function pickcol()
{
	var m= Math.floor(Math.random()*colors.length);
	return m;
}
function radCol()
{
	var r=Math.floor(Math.random()*256);
	var g=Math.floor(Math.random()*256);
	var b=Math.floor(Math.random()*256);
	return "rgb("+r+", "+g+", "+ b+")";
}
function generatecol(num)
{	var arr=[];
	for(var i=0;i<num;i++)
	{
		arr.push(radCol());
	}
	return arr;
}