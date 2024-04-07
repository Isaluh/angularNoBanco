import { Component, Input } from '@angular/core';

@Component({
  selector: 'inputs',
  standalone: true,
  imports: [],
  templateUrl: './inputs.component.html',
  styleUrl: './inputs.component.css'
})
export class InputsComponent {
  @Input("placeholder") placeholder = "";
  @Input("tipo") tipo = "";
  @Input("name") name = "";
}
