#pragma strict
var dado : GameObject;
var numero : int;
var x : int;
var y : int;
var z : int;

var n1 : Vector3;
var n2 : Vector3;
var n3 : Vector3;
var n4 : Vector3;
var n5 : Vector3;
var n6 : Vector3;




function Update () {

if (numero == 0)
{
dado.transform.Rotate (x, y, z);
}
if (numero == 1)
{
dado.transform.rotation = Quaternion.Euler(n1.x,n1.y,n1.z);
}
if (numero == 2)
{
dado.transform.rotation = Quaternion.Euler(n2.x,n2.y,n2.z);
}
if (numero == 3)
{
dado.transform.rotation = Quaternion.Euler(n3.x,n3.y,n3.z);
}
if (numero == 4)
{
dado.transform.rotation = Quaternion.Euler(n4.x,n4.y,n4.z);
}
if (numero == 5)
{
dado.transform.rotation = Quaternion.Euler(n5.x,n5.y,n5.z);
}
if (numero == 6)
{
dado.transform.rotation = Quaternion.Euler(n6.x,n6.y,n6.z);
}
}
function Giro (){
numero = 0;
Invoke ("Suerte",2);
}


function Suerte (){
	numero = Random.Range (1,6);
}


