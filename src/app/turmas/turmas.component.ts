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
  displayedColumns = ['id', 'dia', 'horario'];
  dataSource = ELEMENT_DATA;
  cards = [
    { title: 'Turma #1', cols: 1, rows: 1 },
    { title: 'Turma #2', cols: 1, rows: 1 },
    { title: 'Turma #3', cols: 1, rows: 1 },
    { title: 'Turma #4', cols: 1, rows: 1 },
    { title: 'Turma #5', cols: 1, rows: 1 },
    { title: 'Turma #6', cols: 1, rows: 1 }
  ];

  inscricoes = [
    { title: 'Turma #7', opcao: 1, rows: 1 },
    { title: 'Turma #8', opcao: 2, rows: 1 }
  ];
  restaurantState = 'ready';
  constructor() { }

  ngOnInit() {
  }
}
export interface PeriodicElement {
  id: number;
  dia: string;
  horario: string;
}

const ELEMENT_DATA: PeriodicElement[] = [
  { id: 1, dia: 'Terça-feira', horario: '12:00 - 14:00' },
  { id: 2, dia: 'Quarta-feira', horario: '12:00 - 14:00' },
  { id: 3, dia: 'Terça--feira', horario: '12:00 - 14:00' },
  { id: 4, dia: 'Quarta-feira', horario: '12:00 - 14:00' }
];
