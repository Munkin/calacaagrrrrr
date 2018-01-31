import UnityEngine.SceneManagement;
// JavaScript source code

public function BotonSalir(){
    Application.Quit();
}

public function BotonInfo(){
    SceneManager.LoadScene ("intro");
}
public function BotonPlayo(){
    SceneManager.LoadScene ("SalonDestino");
}
public function Botonagre(){
    SceneManager.LoadScene ("agra");
}
public function Botonback(){
    SceneManager.LoadScene ("MenuPrincipal");
}