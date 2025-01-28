import { Component } from '@angular/core';
import { EsWrapperComponent } from "../../features/es-wrapper/es-wrapper.component";
import { EsButtonComponent } from "../../shared/components/es-button/es-button.component";
import { QuillModule } from 'ngx-quill';
import { FormControl, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-create-ticket',
  imports: [EsWrapperComponent, EsButtonComponent, QuillModule, ReactiveFormsModule],
  templateUrl: './create-ticket.component.html',
  styleUrl: './create-ticket.component.scss'
})
export class CreateTicketComponent {
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
