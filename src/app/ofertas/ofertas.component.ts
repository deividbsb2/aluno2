import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
    selector: 'app-ofertas',
    templateUrl: './ofertas.component.html',
    styleUrls: ['./ofertas.component.scss']
})
export class OfertasComponent implements OnInit {
    onOver = false;
    constructor(private router: Router) { }

    ngOnInit() {
    }

    overCard() {
        this.onOver = !this.onOver;
    }

    goToTurmas() {
        this.router.navigate(['/turmas']);
    }
}
