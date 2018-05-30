import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dados-pessoais',
  templateUrl: './dados-pessoais.component.html',
  styleUrls: ['./dados-pessoais.component.css']
})
export class DadosPessoaisComponent implements OnInit {
  fezIngles = false;
  ufs = [
    { id: 1, nome: 'AC' },
    { id: 2, nome: 'AL' },
    { id: 3, nome: 'AM' },
    { id: 4, nome: 'AP' },
    { id: 5, nome: 'BA' },
    { id: 6, nome: 'CE' },
    { id: 7, nome: 'DF' },
    { id: 8, nome: 'ES' },
    { id: 9, nome: 'GO' },
    { id: 10, nome: 'MA' },
    { id: 11, nome: 'MG' },
    { id: 12, nome: 'MS' },
    { id: 13, nome: 'MT' },
    { id: 14, nome: 'PA' },
    { id: 15, nome: 'PB' },
    { id: 16, nome: 'PE' },
    { id: 17, nome: 'PI' },
    { id: 18, nome: 'PR' },
    { id: 19, nome: 'RJ' },
    { id: 20, nome: 'RN' },
    { id: 21, nome: 'RO' },
    { id: 22, nome: 'RR' },
    { id: 23, nome: 'RS' },
    { id: 24, nome: 'SC' },
    { id: 25, nome: 'SE' },
    { id: 26, nome: 'SP' },
    { id: 27, nome: 'TO' }
  ];
  municipios = [
    { id: 1, nome: 'Abadia de Goiás' },
    { id: 2, nome: 'Abadia dos Dourados' },
    { id: 3, nome: 'Abadiânia' },
    { id: 4, nome: 'Abaeté' },
    { id: 5, nome: 'Abaetetuba' },
    { id: 6, nome: 'Abaiara' },
    { id: 7, nome: 'Abaíra' },
    { id: 8, nome: 'Abaré' },
    { id: 9, nome: 'Abatiá' },
    { id: 10, nome: 'Abdon Batista' },
    { id: 11, nome: 'Abelardo Luz' },
    { id: 12, nome: 'Abel Figueiredo' },
    { id: 13, nome: 'Abre-Campo' },
    { id: 14, nome: 'Abreu e Lima' },
    { id: 15, nome: 'Abreulândia' },
    { id: 16, nome: 'Acaiaca' },
    { id: 17, nome: 'Açailândia' },
    { id: 18, nome: 'Acajutiba' },
    { id: 19, nome: 'Acará' }
  ];
  constructor() { }

  ngOnInit() {
  }

  jaFezIngles() {
    this.fezIngles = !this.fezIngles;
  }
}
