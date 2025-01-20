import { Component } from '@angular/core';
import { EsWrapperComponent } from "../../features/es-wrapper/es-wrapper.component";
import { TicketInformationComponent } from "../../components/ticket-information/ticket-information.component";

@Component({
  selector: 'app-ticket',
  imports: [EsWrapperComponent, TicketInformationComponent],
  templateUrl: './ticket.component.html',
  styleUrl: './ticket.component.scss'
})
export class TicketComponent {

}
