import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

// Importar componentes
import { HomeComponent } from './home/home.component';
import { VuelosComponent } from './vuelos/vuelos.component';
import { ReservasComponent } from './reservas/reservas.component';
import { ConsultarReservasComponent } from './reservas/consultar-reservas/consultar-reservas.component';

const appRoutes: Routes = [
	{path: '', component: HomeComponent},
	{path: 'vuelos', component: VuelosComponent},
	{path: 'consultar-reservas', component: ConsultarReservasComponent},
	{path: '**', component: HomeComponent}
];

export const appRoutingProviders: any[] = [];
export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);