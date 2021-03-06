import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

// COMPONENTS
import { MainComponent } from './containers/main.component';

const MainRoutes: Routes = [
    { path: '', redirectTo: 'main', pathMatch: 'full' },
    { path: '', component: MainComponent, children: [] }
];

@NgModule({
    imports: [RouterModule.forChild(MainRoutes)],
    exports: [RouterModule]
})

export class MainRoutingModule { }
