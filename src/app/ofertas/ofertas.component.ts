import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
    selector: 'app-ofertas',
    templateUrl: './ofertas.component.html',
    styleUrls: ['./ofertas.component.scss']
})
export class OfertasComponent implements OnInit {
    onOver = '';
    constructor(private router: Router) { }

    ngOnInit() {
    }

    overCard(card: string) {
        this.onOver = card;
    }
    outCard() {
        this.onOver = '';
    }

    goToTurmas(type: string) {
        this.router.navigate(['/turma/' + type]);
    }
}
