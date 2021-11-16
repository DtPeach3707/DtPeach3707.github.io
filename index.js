var showprog = false;
var showresh = false;
var showothe = false;


function showProgram(){
	if(showprog){
		document.getElementById('progt').setAttribute('style', 'opacity: 0;');
		document.getElementById('progt').classList.remove('show');
		showprog = false;
	}
	else{
		document.getElementById('progt').setAttribute('style', '');
		document.getElementById('progt').classList.add('show');
		showprog = true;
	}
}


function showResearch(){
	if(showresh){
		document.getElementById('researcht').setAttribute('style', 'opacity: 0;');
		document.getElementById('researcht').classList.remove('show');
		showresh = false;
	}
	else{
		document.getElementById('researcht').setAttribute('style', '');
		document.getElementById('researcht').classList.add('show');
		showresh = true;
	}
}


function showOther(){
	if(showothe){
		document.getElementById('othexpt').setAttribute('style', 'opacity: 0;');
		document.getElementById('othexpt').classList.remove('show');
		showothe = false;
	}
	else{
		document.getElementById('othexpt').setAttribute('style', '');
		document.getElementById('othexpt').classList.add('show');
		showothe = true;
	}
}

document.getElementById('prog').addEventListener('click', showProgram);
document.getElementById('research').addEventListener('click', showResearch);
document.getElementById('othexp').addEventListener('click', showOther);
