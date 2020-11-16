import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-pregdetconj',
  templateUrl: './pregdetconj.component.html',
  styleUrls: ['./pregdetconj.component.css']
})
export class PregdetconjComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit(): void {
    
  }

  toprimate(){
    this.router.navigateByUrl('/primate');
  }

  VerificarRespuestas() {
    var total = 5;
    var puntos =0;

    var myForm = document.forms["quizForm"];
    var respuestas = ["a", "b", "c", "c","b"];

    for(var i = 1; i <= total; i++){
      if(myForm["p" + i].value === null || myForm["p" + i].value === ""){
        alert("Porfavor responde la pregunta" + i);
        return false;
      }else{
        if(myForm["p" + i].value === respuestas[i-1]){
          ++puntos;
        }
      }
    }

    var resultado = document.getElementById("resultado");
    resultado.innerHTML = '<h3> Obtuvistes <span>' + puntos + '</span> de <span>' + total + 'puntos</span></h3>';

    return false;
  }

}
