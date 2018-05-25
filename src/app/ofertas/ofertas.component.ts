import { Component, OnInit } from '@angular/core';
import { SwPush } from '@angular/service-worker';

@Component({
    selector: 'app-ofertas',
    templateUrl: './ofertas.component.html',
    styleUrls: ['./ofertas.component.css']
})
export class OfertasComponent implements OnInit {
    cards = [
        { title: 'Card 1', cols: 1, rows: 1 },
        { title: 'Card 2', cols: 1, rows: 1 },
        { title: 'Card 3', cols: 1, rows: 1 },
        { title: 'Card 4', cols: 1, rows: 1 },
        { title: 'Card 5', cols: 1, rows: 1 },
        { title: 'Card 6', cols: 1, rows: 1 }
    ];

    constructor() { }

    ngOnInit() {
    }
}
