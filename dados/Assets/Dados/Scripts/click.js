#pragma strict

var tirada : boolean;
function Start () {
	tirada = false;
}

function Onclick() {
if (tirada == false){
	tirada = true;
	Invoke("tiempo",2);
	var info = GameObject.Find("DadoDstino");
	info.SendMessage("Giro");
}
}
	

function tiempo(){
	tirada= false;
}