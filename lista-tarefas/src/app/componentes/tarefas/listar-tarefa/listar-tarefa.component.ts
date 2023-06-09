import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-listar-tarefa',
  templateUrl: './listar-tarefa.component.html',
  styleUrls: ['./listar-tarefa.component.css'],
})

//Classe ListarTarefaComponent
export class ListarTarefaComponent implements OnInit {
  //O atributo 'listaTarefas' é um componente pai, por isso ele fornece as informações para o componente filho 'tarefa'
  listaTarefas = [
    {
      conteudo: 'Passo informações para o componente filho',
      responsavel: 'Componente pai',
      etapa: 'etapa3',
    },
    {
      conteudo: 'Minha propriedade é decorada com @Input()',
      responsavel: 'Componente filho',
      etapa: 'etapa2',
    },
  ];

  constructor() {}

  ngOnInit(): void {}
}
