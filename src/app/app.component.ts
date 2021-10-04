import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'uninter';


  headers = ["Nome","RU","Curso","Nascimento"];

  alunos = [
    {
      "Nome": "Marcos Oliveira",
      "RU": "1312157",
      "Curso":"Analise e Desenvolvimento de Sistemas",
      Nascimento:"04/09/1994"
    },
    {
      "Nome": "Rengoku Kyojiro ",
      "RU": "110954",
      "Curso":"Combatente do Gelo",
      "Nascimento":"04/09/2000"
    },
    {
      "Nome": "Shikamaru Nara ",
      "RU": "65982",
      "Curso":"Estratégia e Economia",
      "Nascimento":"06/03/1997"
    },
    {
      "Nome": "Gandalf o Cinzento",
      "RU": "986482",
      "Curso":"Liderança e Coaching",
      "Nascimento":"04/09/1882"
    },
    {
      "Nome": "Tio Patinhas",
      "RU": "874562",
      "Curso":"Administração e Negocios",
      "Nascimento":"04/09/1890"
    }
  ];
}
