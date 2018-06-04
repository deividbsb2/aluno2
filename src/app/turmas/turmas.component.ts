import { Component, OnInit } from '@angular/core';
import { SwPush } from '@angular/service-worker';
import { trigger, state, style, transition, animate } from '@angular/animations';

@Component({
  selector: 'app-turmas',
  templateUrl: './turmas.component.html',
  styleUrls: ['./turmas.component.css'],
  animations: [
    trigger('restaurantAppeared', [
      state('ready', style({ opacity: 1 })),
      transition('void => ready', [
        style({ opacity: 0, transform: 'translate(-30px, -10px)' }),
        animate('300ms 0s ease-in-out')
      ])
    ])
  ]
})
export class TurmasComponent implements OnInit {

  cards = [
    { title: 'Card 1', cols: 1, rows: 1 },
    { title: 'Card 2', cols: 1, rows: 1 },
    { title: 'Card 3', cols: 1, rows: 1 },
    { title: 'Card 4', cols: 1, rows: 1 },
    { title: 'Card 5', cols: 1, rows: 1 },
    { title: 'Card 6', cols: 1, rows: 1 }
  ];
  restaurantState = 'ready';
  constructor() { }

  ngOnInit() {
  }
}
