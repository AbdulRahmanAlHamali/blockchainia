import { Routes, RouterModule } from '@angular/router';
import {WelcomePageComponent} from "./welcome-page.component";

const routes: Routes = [
    {
        path: '',
        component: WelcomePageComponent
    }
];

export const routing = RouterModule.forChild(routes);