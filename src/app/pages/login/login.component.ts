import { Component } from '@angular/core';
import { LoginLayoutComponent } from "../../components/login-layout/login-layout.component";
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { PrimaryInputComponent } from "../../shared/components/primary-input/primary-input.component";
import { LoginService } from '../../services/login.service';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-login',
  imports: [LoginLayoutComponent, ReactiveFormsModule, PrimaryInputComponent],
  providers:[LoginService],
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss'
})
export class LoginComponent {
  loginForm!: FormGroup;

  constructor(private loginService: LoginService, private toastr: ToastrService) {
    this.loginForm = new FormGroup({
      email: new FormControl('', [Validators.required, Validators.email]),
      password: new FormControl('', [Validators.required])
    })
  }

  submit() {
    this.loginService.login(this.loginForm.value.email, this.loginForm.value.password)
    .subscribe({
      next: () => this.toastr.success("autenticado com sucesso!"),
      error: () => this.toastr.error("Erro inesperado, tente novamente mais tarde")
    })
  }
}
