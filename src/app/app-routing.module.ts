import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { OfertasComponent } from './ofertas/ofertas.component';
import { DashboardComponent } from './dashboard/dashboard.component';

 const routes: Routes = [
    {
        path: '',
        component: OfertasComponent
    },
    {
        path: 'notify',
        component: DashboardComponent
    }
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule { }
