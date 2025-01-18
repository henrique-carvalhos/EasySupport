import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { LoginResponse } from '../Types/response-login.types';
import { tap } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor(private httpClient: HttpClient) { }

  login(email: string, password: string) {
    return this.httpClient
      .put<LoginResponse>("https://localhost:7124/api/users/login", { email, password }).pipe(
        tap((value) => {
          console.log(value)
          localStorage.setItem("auth-token", value.data.token)
        })
      )
  }
}
