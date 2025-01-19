import { Routes } from '@angular/router';
import { LoginComponent } from './pages/login/login.component';
import { ListTicketsUserComponent } from './pages/list-tickets-user/list-tickets-user.component';

export const routes: Routes = [
    {
        path: '',
        component: LoginComponent
    },
    {
        path: 'tickets-users',
        component: ListTicketsUserComponent
    }
];
