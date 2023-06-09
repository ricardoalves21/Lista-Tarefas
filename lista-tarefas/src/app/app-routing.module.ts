import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CriarTarefaComponent } from './componentes/tarefas/criar-tarefa/criar-tarefa.component';
import { ListarTarefaComponent } from './componentes/tarefas/listar-tarefa/listar-tarefa.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'listarTarefa',
    pathMatch: 'full',
  },
  {
    path: 'criarTarefa',
    component: CriarTarefaComponent,
  },
  {
    path: 'listarTarefa',
    component: ListarTarefaComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
