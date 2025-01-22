import { Component } from '@angular/core';
import { EsWrapperComponent } from "../../features/es-wrapper/es-wrapper.component";
import { EsButtonComponent } from "../../shared/components/es-button/es-button.component";

@Component({
  selector: 'app-create-ticket',
  imports: [EsWrapperComponent, EsButtonComponent],
  templateUrl: './create-ticket.component.html',
  styleUrl: './create-ticket.component.scss'
})
export class CreateTicketComponent {

}
