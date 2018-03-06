import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

// Importar componentes
import { HomeComponent } from './home/home.component';
import { VuelosComponent } from './vuelos/vuelos.component';
import { ReservasComponent } from './reservas/reservas.component';

const appRoutes: Routes = [
	{path: '', component: HomeComponent},
	{path: 'vuelos', component: VuelosComponent},
	{path: 'reservas', component: ReservasComponent},
	{path: '**', component: HomeComponent}
];

export const appRoutingProviders: any[] = [];
export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);