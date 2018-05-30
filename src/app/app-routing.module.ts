import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { OfertasComponent } from './ofertas/ofertas.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { DadosPessoaisComponent } from './dados-pessoais/dados-pessoais.component';

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
    }
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule { }
