import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-criar-tarefa',
  templateUrl: './criar-tarefa.component.html',
  styleUrls: ['./criar-tarefa.component.css'],
})
//
export class CriarTarefaComponent implements OnInit {
  //Objeto tarefa
  tarefa = {
    id: 1,
    conteudo: 'Aula de reforço Elias',
    responsavel: 'Ricardo',
    etapa: 'etapa1',
  };

  constructor() {}

  ngOnInit(): void {}

  criarTarefa() {
    alert('Nova tarefa criada');
  }

  cancelarTarefa() {
    alert('Tarefa cancelada');
  }
}
