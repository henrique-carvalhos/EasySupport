import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-es-button',
  imports: [CommonModule],
  templateUrl: './es-button.component.html',
  styleUrl: './es-button.component.scss'
})
export class EsButtonComponent {
  @Input() text: string = '';
  tamanho!: string;
  cor!: string;

  constructor(private router: Router){
    const url = this.router.url;

    if(url.includes('/tickets-user')){
      this.tamanho = '-small';
      this.cor = '';
    } else if(url.includes('/')){
      this.tamanho = '';
      this.cor = '';
    }
  }
}
