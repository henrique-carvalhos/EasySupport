import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { LoginComponent } from "../../pages/login/login.component";
import { LogoComponent } from "../../shared/components/logo/logo.component";

@Component({
  selector: 'app-es-header',
  imports: [CommonModule, LogoComponent],
  templateUrl: './es-header.component.html',
  styleUrl: './es-header.component.scss'
})
export class EsHeaderComponent {

}
