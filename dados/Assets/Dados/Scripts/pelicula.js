// JavaScript source code
#pragma strict

var pelicula : MovieTexture;

function Start () {
    GetComponent.<Renderer>().material.mainTexture = pelicula;
    pelicula.loop = true;
    pelicula.Play();
}


    