import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-es-button',
  imports: [],
  templateUrl: './es-button.component.html',
  styleUrl: './es-button.component.scss'
})
export class EsButtonComponent {
  @Input() text: string = '';
}
