import { Routes, RouterModule } from '@angular/router';
import {PostPuzzlePageComponent} from "./post-puzzle-page.component";

const routes: Routes = [
    {
        path: '',
        component: PostPuzzlePageComponent
    }
];

export const routing = RouterModule.forChild(routes);