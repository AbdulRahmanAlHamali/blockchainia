import { Routes, RouterModule } from '@angular/router';
import { ModuleWithProviders } from '@angular/core';
import {AppComponent} from "./app.component";

export const routes: Routes = [
    { path: '', redirectTo: 'blockchainia/welcome-page', pathMatch: 'full' },
    { path: 'blockchainia', children: [
        { path: '', redirectTo: 'welcome-page', pathMatch: 'full' },
        { path: 'welcome-page', loadChildren: './pages/welcome-page/welcome-page.module#WelcomePageModule' },
        { path: 'waiting-page', loadChildren: './pages/waiting-page/waiting-page.module#WaitingPageModule' },
        { path: 'battleground-page', loadChildren: './pages/battleground-page/battleground-page.module#BattlegroundPageModule' }
    ]}
];

export const routing: ModuleWithProviders = RouterModule.forRoot(routes, { useHash: true });