$(function() {
	let inputarea = $('#rollNum');
    let log = $('#rollLog');
	let out = $('#rollRes');
	let tot = 0;
	let w = 0;
	let l = 0;
	let wp = 0;
	let lp = 0;
    
    $('#rollD').click(function(event) {
    	let curNum = Math.floor(Math.random()*(6-1))+1;
        inputarea.val(curNum);
        if(curNum > 3){
        	out.val('You win!').css("color","green");
        	log.append('You win! \n');
        	tot++;
        	w++;
        	wp = Math.floor(w/tot*100); 
        } else {
        	out.val('You lose!').css("color","red");
        	log.append('You lose! \n');
        	tot++;
        	lp = 100 - wp;
        }
    });
    
    $('#rollLog').mouseover(function(){
    	$('#popupBasic').text("Win stats are: " + wp + "% " + "Lose stats are:" + lp +"%" );
    });
  
  
});