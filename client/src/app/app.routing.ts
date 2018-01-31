import { Routes, RouterModule } from '@angular/router';
import { ModuleWithProviders } from '@angular/core';
import {AppComponent} from "./app.component";

export const routes: Routes = [
    { path: '', redirectTo: 'blockchainia/welcome-page', pathMatch: 'full' },
    { path: 'blockchainia', children: [
        { path: '', redirectTo: 'welcome-page', pathMatch: 'full' },
        { path: 'welcome-page', loadChildren: './pages/welcome-page/welcome-page.module#WelcomePageModule' },
        { path: 'waiting-page', loadChildren: './pages/waiting-page/waiting-page.module#WaitingPageModule' },
        { path: 'battleground-page', loadChildren: './pages/battleground-page/battleground-page.module#BattlegroundPageModule' },
        { path: 'puzzle-page', loadChildren: './pages/puzzle-page/puzzle-page.module#PuzzlePageModule' },
        { path: 'post-puzzle-page', loadChildren: './pages/post-puzzle-page/post-puzzle-page.module#PostPuzzlePageModule' }
    ]}
];

export const routing: ModuleWithProviders = RouterModule.forRoot(routes, { useHash: true });