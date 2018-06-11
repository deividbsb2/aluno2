import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-turma',
  templateUrl: './turma.component.html',
  styleUrls: ['./turma.component.css']
})
export class TurmaComponent implements OnInit {
  displayedColumns = ['id', 'dia', 'horario'];
  dataSource = ELEMENT_DATA;
  panelIOpenState = false;
  panelOpenState = false;
  type = 'primary';
  constructor(private route: ActivatedRoute) { }

  ngOnInit() {
    this.type = Types[this.route.snapshot.paramMap.get('type')];
  }
}

enum Types {
  meo = 'warn',
  ap = 'primary',
  tp = 'accent',
  co = 'warn'
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
