﻿(function(){

	var createBox = function(){
		var elCont = $("#content")[0];
		var elBox = $('<div class="balloon"></div>');
		var aColor = ["#342353","red","blue","#098343","#afed00","#2343de","#23ffe3"];
		
		
		elBox.css({
			"left": Math.floor(Math.random() * 10000) % 750,
			"top" : Math.floor(Math.random() * 10000) % 350
			//"background-color": aColor[Math.floor(Math.random() * 100) % 7]
		}).fadeIn();
		
		elBox[0].onclick = function(){
			jQuery(this).css("background-position", "-50px 0px");
		}
		elCont.appendChild(elBox[0]);
		
	}
	
	setInterval( createBox, 500)

})()

