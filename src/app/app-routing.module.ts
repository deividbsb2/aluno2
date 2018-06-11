import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { OfertasComponent } from './ofertas/ofertas.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { DadosPessoaisComponent } from './dados-pessoais/dados-pessoais.component';
import { TurmasComponent } from './turmas/turmas.component';
import { TurmaComponent } from './turma/turma.component';

const routes: Routes = [
    { path: '', redirectTo: '/ofertas', pathMatch: 'full' },
    {
        path: 'ofertas',
        component: OfertasComponent
    },
    {
        path: 'notify',
        component: DashboardComponent
    },
    {
        path: 'dados-pessoais',
        component: DadosPessoaisComponent
    },
    {
        path: 'turmas',
        component: TurmasComponent
    },
    {
        path: 'turma/:type',
        component: TurmaComponent
    }
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule { }
