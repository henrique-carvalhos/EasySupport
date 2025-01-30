import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-es-button',
  imports: [CommonModule],
  templateUrl: './es-button.component.html',
  styleUrl: './es-button.component.scss'
})
export class EsButtonComponent {
  @Input() text: string = '';
  @Input() estilo: string = '';
  @Input() tamanho: string = '';
}
