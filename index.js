var showprog = false;
var showresh = false;
var showothe = false;

// Defining event listener functions

function showProgram(){
	if(showprog){
		document.getElementById('progt').setAttribute('style', 'opacity: 0;');
		document.getElementById('progt').classList.remove('show');
		localStorage.setItem('showprog', false);
		showprog = false;
	}
	else{
		document.getElementById('progt').setAttribute('style', '');
		document.getElementById('progt').classList.add('show');
		localStorage.setItem('showprog', true);
		showprog = true;
	}
}


function showResearch(){
	if(showresh){
		document.getElementById('researcht').setAttribute('style', 'opacity: 0;');
		document.getElementById('researcht').classList.remove('show');
		localStorage.setItem('showresh', false);
		showresh = false;
	}
	else{
		document.getElementById('researcht').setAttribute('style', '');
		document.getElementById('researcht').classList.add('show');
		localStorage.setItem('showresh', true);
		showresh = true;
	}
}


function showOther(){
	if(showothe){
		document.getElementById('othexpt').setAttribute('style', 'opacity: 0;');
		document.getElementById('othexpt').classList.remove('show');
		localStorage.setItem('showothe', false);
		showothe = false;
	}
	else{
		document.getElementById('othexpt').setAttribute('style', '');
		document.getElementById('othexpt').classList.add('show');
		localStorage.setItem('showothe', true);
		showothe = true;
	}
}

// Getting local storage values and changing according to those values

if(localStorage.getItem('showresh'))
{
	if(localStorage.getItem('showresh') == 'true')
	{
		showResearch();
	}
}

if(localStorage.getItem('showprog'))
{
	if(localStorage.getItem('showprog') == 'true')
	{
		showProgram();
	}
}

if(localStorage.getItem('showothe'))
{
	if(localStorage.getItem('showothe') == 'true')
	{
		showOther();
	}
}

// Setting up event listeners

document.getElementById('prog').addEventListener('click', showProgram);
document.getElementById('research').addEventListener('click', showResearch);
document.getElementById('othexp').addEventListener('click', showOther);
