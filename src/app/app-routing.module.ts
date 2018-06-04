import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { OfertasComponent } from './ofertas/ofertas.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { DadosPessoaisComponent } from './dados-pessoais/dados-pessoais.component';
import { TurmasComponent } from './turmas/turmas.component';

 const routes: Routes = [
    {
        path: '',
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
    }
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule { }
