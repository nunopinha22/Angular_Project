import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

// COMPONENTS
import { MainComponent } from './main.component';
import { DetailComponent } from './components/detail.component';

const MainRoutes: Routes = [
    { path: '', redirectTo: 'main', pathMatch: 'full' },
    { path: '', component: MainComponent, children: [] },
    { path: '', component: DetailComponent, children: [] }
];

@NgModule({
    imports: [RouterModule.forChild(MainRoutes)],
    exports: [RouterModule]
})

export class MainRoutingModule { }
