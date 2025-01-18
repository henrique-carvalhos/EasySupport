import { Component, EventEmitter, Output } from '@angular/core';
import { EsButtonComponent } from "../../shared/components/es-button/es-button.component";
import { ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-login-layout',
  imports: [EsButtonComponent, ReactiveFormsModule],
  templateUrl: './login-layout.component.html',
  styleUrl: './login-layout.component.scss'
})
export class LoginLayoutComponent {
  @Output('submit') onSubmit = new EventEmitter();

  submit(){
    this.onSubmit.emit();
  }
}
