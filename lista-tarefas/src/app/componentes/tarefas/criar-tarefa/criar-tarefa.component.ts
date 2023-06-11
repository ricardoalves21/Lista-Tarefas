import { Tarefa } from './../tarefa';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-criar-tarefa',
  templateUrl: './criar-tarefa.component.html',
  styleUrls: ['./criar-tarefa.component.css'],
})
//
export class CriarTarefaComponent implements OnInit {
  //Objeto tarefa
  //O objeto 'tarefa' precisa ser tipado com a interface definida em Tarefa'
  //Lembrando que o objeto precisa conter TODOS os atributos definidos em sua interfa (tipo escolhido para este objeto)

  tarefa: Tarefa = {
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
