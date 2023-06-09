import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-tarefa',
  templateUrl: './tarefa.component.html',
  styleUrls: ['./tarefa.component.css'],
})
export class TarefaComponent implements OnInit {
  //O componente 'tarefa' é filho, por isso é decorado com @Input()
  @Input() tarefa = {
    conteudo: 'I love Angular',
    responsavel: 'Ricardo',
    etapa: 'etapa3',
  };

  constructor() {}

  ngOnInit(): void {}
}
