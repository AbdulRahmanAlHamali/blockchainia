import { Routes, RouterModule } from '@angular/router';
import {BattlegroundPageComponent} from "./battleground-page.component";

const routes: Routes = [
    {
        path: '',
        component: BattlegroundPageComponent
    }
];

export const routing = RouterModule.forChild(routes);