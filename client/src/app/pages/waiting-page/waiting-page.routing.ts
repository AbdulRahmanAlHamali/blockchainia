import { Routes, RouterModule } from '@angular/router';
import {WaitingPageComponent} from "./waiting-page.component";

const routes: Routes = [
    {
        path: '',
        component: WaitingPageComponent
    }
];

export const routing = RouterModule.forChild(routes);