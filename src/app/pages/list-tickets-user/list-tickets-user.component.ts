import { Component } from '@angular/core';
import { EsWrapperComponent } from "../../features/es-wrapper/es-wrapper.component";
import { EsButtonComponent } from '../../shared/components/es-button/es-button.component';

@Component({
  selector: 'app-list-tickets-user',
  imports: [EsWrapperComponent, EsButtonComponent],
  templateUrl: './list-tickets-user.component.html',
  styleUrl: './list-tickets-user.component.scss'
})
export class ListTicketsUserComponent {

}
