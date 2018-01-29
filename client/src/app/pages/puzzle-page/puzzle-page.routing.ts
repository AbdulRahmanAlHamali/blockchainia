import { Routes, RouterModule } from '@angular/router';
import {PuzzlePageComponent} from "./puzzle-page.component";

const routes: Routes = [
    {
        path: '',
        component: PuzzlePageComponent
    }
];

export const routing = RouterModule.forChild(routes);