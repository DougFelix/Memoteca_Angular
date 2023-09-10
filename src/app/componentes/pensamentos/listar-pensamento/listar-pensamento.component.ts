import { Component } from '@angular/core';

@Component({
  selector: 'app-listar-pensamento',
  templateUrl: './listar-pensamento.component.html',
  styleUrls: ['./listar-pensamento.component.css']
})
export class ListarPensamentoComponent {
  listaPensamentos = [
    {
      conteudo: 'I love Angular, I love Angular, I love Angular, I love Angular, I love Angular, I love Angular, I love Angular, I love Angular, I love Angular, I love Angular, I love Angular, I love Angular, I love Angular, I love Angular, I love Angular, I love Angular,I love Angular, I love Angular, I love Angular,',
      autoria: 'Douglas',
      modelo: 'modelo3'
    },
    {
      conteudo: 'Hate is a strong word',
      autoria: 'Douglas',
      modelo: 'modelo2'
    },
    {
      conteudo: 'Lets be friends',
      autoria: 'Douglas',
      modelo: 'modelo1'
    }
  ];
}
