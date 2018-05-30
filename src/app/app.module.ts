import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FlexLayoutModule } from '@angular/flex-layout';
import { AppComponent } from './app.component';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule} from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import {
    MatButtonModule,
    MatCheckboxModule,
    MatToolbarModule,
    MatSidenavModule,
    MatIconModule,
    MatListModule,
    MatGridListModule,
    MatCardModule,
    MatMenuModule,
    MatExpansionModule,
    MatFormFieldModule,
    MatInputModule,
    MatSelectModule,
    MatSlideToggleModule,
    MatRadioModule
} from '@angular/material';

import { AppRoutingModule } from './app-routing.module';
import { NavigationComponent } from './navigation/navigation.component';
import { LayoutModule } from '@angular/cdk/layout';
import { DashboardComponent } from './dashboard/dashboard.component';
import { OfertasComponent } from './ofertas/ofertas.component';
import { ServiceWorkerModule } from '@angular/service-worker';
import { environment } from '../environments/environment';
import { NewsletterService } from './newsletter.service';
import { DadosPessoaisComponent } from './dados-pessoais/dados-pessoais.component';
@NgModule({
    declarations: [
        AppComponent,
        NavigationComponent,
        DashboardComponent,
        OfertasComponent,
        DadosPessoaisComponent
    ],
    imports: [
        BrowserModule,
        NoopAnimationsModule,
        HttpClientModule,
        FormsModule,
        ReactiveFormsModule,
        FlexLayoutModule,
        MatButtonModule,
        MatCheckboxModule,
        LayoutModule,
        MatToolbarModule,
        MatSidenavModule,
        MatIconModule,
        MatListModule,
        MatGridListModule,
        MatCardModule,
        MatMenuModule,
        MatExpansionModule,
        MatFormFieldModule,
        MatInputModule,
        MatSlideToggleModule,
        MatSelectModule,
        MatRadioModule,
        AppRoutingModule,
        ServiceWorkerModule.register('/ngsw-worker.js', { enabled: environment.production })
    ],
    providers: [NewsletterService],
    bootstrap: [AppComponent]
})
export class AppModule {
}
