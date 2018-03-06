import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

// Importar componentes
import { HomeComponent } from './home/home.component';
import { VuelosComponent } from './vuelos/vuelos.component';

const appRoutes: Routes = [
	{path: '', component: HomeComponent},
	{path: 'vuelos', component: VuelosComponent},
	{path: '**', component: HomeComponent}
];

export const appRoutingProviders: any[] = [];
export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);