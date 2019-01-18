var player=document.getElementById("play");
	document.addEventListener("keydown",move);
	var xpos=100;
	var ypos=100;
	var permove=20;
	var rotateflag=false;//required because pressing r twice breaks the code
	var angle=0;
	var interval;
	player.style='transform:translate('+xpos+' px ,'+ypos+'px);transform:rotate('+angle+'deg);';
	function move(){
		var k=event.key;
		if(k=="ArrowRight"||k=="d"){
			xpos+=permove;
		}
		if(k=="ArrowLeft"||k=="a"){
			xpos-=permove;
		}
		if(k=="ArrowUp"||k=="w"){
			ypos-=permove;
		}
		if(k=="ArrowDown"||k=="s"){
			ypos+=permove;
		}
		if(k=='q' && rotateflag==false){
			interval=setInterval(function(){
				angle++;
				player.style='transform:translate('+xpos+'px,'+ypos+'px) rotate('+angle+'deg);\n';
			},3);
			rotateflag=true;
		}
		if(k=='e'){
			clearInterval(interval);
			player.style='transform:translate('+xpos+'px,'+ypos+'px) rotate('+angle+'deg);\n';
			rotateflag=false;
		}
		player.style='transform:translate('+xpos+'px,'+ypos+'px) rotate('+angle+'deg);\n';

	}
