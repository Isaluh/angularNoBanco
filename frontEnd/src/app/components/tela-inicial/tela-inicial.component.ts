import { Component } from '@angular/core';
import { InputsComponent } from './inputs/inputs.component';
import { BotaoComponent } from './botao/botao.component';

@Component({
  selector: 'tela-inicial',
  standalone: true,
  imports: [InputsComponent, BotaoComponent],
  templateUrl: './tela-inicial.component.html',
  styleUrl: './tela-inicial.component.css'
})
export class TelaInicialComponent {

}
