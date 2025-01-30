import { Component } from '@angular/core';
import { EsButtonComponent } from "../../shared/components/es-button/es-button.component";
import { QuillModule } from 'ngx-quill';
import { FormControl, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-ticket-information',
  imports: [EsButtonComponent,  QuillModule, ReactiveFormsModule],
  templateUrl: './ticket-information.component.html',
  styleUrl: './ticket-information.component.scss'
})
export class TicketInformationComponent {
conteudo = new FormControl('');

  customModules = {
    toolbar: [
      ['bold', 'italic', 'underline'], // Negrito, Itálico, Sublinhado
      [{ list: 'ordered' }, { list: 'bullet' }], // Listas numeradas e com marcadores
      [{ header: [1, 2, 3, false] }], // Tamanhos de título
      ['blockquote', 'code-block'], // Bloco de citação e código
      [{ align: [] }], // Alinhamento de texto
      [{ color: [] }, { background: [] }], // Cores de texto e fundo
      ['clean'] // Remover formatação
    ]
  };
}
