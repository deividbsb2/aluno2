import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FlexLayoutModule } from '@angular/flex-layout';
import { AppComponent } from './app.component';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule} from '@angular/common/http';
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
    MatFormFieldModule
} from '@angular/material';
import { AppRoutingModule } from './app-routing.module';
import { NavigationComponent } from './navigation/navigation.component';
import { LayoutModule } from '@angular/cdk/layout';
import { DashboardComponent } from './dashboard/dashboard.component';
import { OfertasComponent } from './ofertas/ofertas.component';
import { ServiceWorkerModule } from '@angular/service-worker';
import { environment } from '../environments/environment';
import { NewsletterService } from './newsletter.service';
@NgModule({
    declarations: [
        AppComponent,
        NavigationComponent,
        DashboardComponent,
        OfertasComponent
    ],
    imports: [
        BrowserModule,
        NoopAnimationsModule,
        HttpClientModule,
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
        AppRoutingModule,
        ServiceWorkerModule.register('/ngsw-worker.js', { enabled: environment.production })
    ],
    providers: [NewsletterService],
    bootstrap: [AppComponent]
})
export class AppModule {
}
