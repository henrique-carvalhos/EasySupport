import { Routes } from '@angular/router';
import { LoginComponent } from './pages/login/login.component';
import { ListTicketsUserComponent } from './pages/list-tickets-user/list-tickets-user.component';
import { CreateTicketComponent } from './pages/create-ticket/create-ticket.component';
import { TicketComponent } from './pages/ticket/ticket.component';

export const routes: Routes = [
    {
        path: '',
        component: LoginComponent
    },
    {
        path: 'tickets-user',
        component: ListTicketsUserComponent
    },
    {
        path: 'create-ticket',
        component: CreateTicketComponent
    },
    {
        path: 'ticket',
        component: TicketComponent
    }
];
