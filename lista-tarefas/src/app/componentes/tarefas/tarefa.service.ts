import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Tarefa } from './tarefa';
import { Observable } from 'rxjs';

//Este decorator sinaliza ao Angular que esta é uma classe INJETÁVEL
/*Uma classe injetável pode ser utilizada em várias partes do nosso projeto (componentes e demais classes)
através do método INJEÇÃO DE DEPENDÊNCIAS*/
@Injectable({
  providedIn: 'root', //O valor 'root' diz que este serviço estará visível para TODA a aplicação
})
//Esta classe 'TarefaService' está sendo exporta juntamente com o seu construtor
export class TarefaService {
  //Criando o atributo API
  private readonly API = 'http://localhost:3000/tarefas';

  constructor(private http: HttpClient) {}

  listar(): Observable<Tarefa> {
    return this.http.get<Tarefa[]>(this.API);
  }
}
