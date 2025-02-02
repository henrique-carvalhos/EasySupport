import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { LogoComponent } from "../../shared/components/logo/logo.component";
import { Router } from '@angular/router';

@Component({
  selector: 'app-es-header',
  imports: [CommonModule, LogoComponent],
  templateUrl: './es-header.component.html',
  styleUrl: './es-header.component.scss'
})
export class EsHeaderComponent {

  constructor(private router: Router) { }

  redirectTo(url: string) {
    this.router.navigateByUrl(url);
  }
}
