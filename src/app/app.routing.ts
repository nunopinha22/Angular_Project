import { NgModule } from '@angular/core';
import { RouterModule, Routes, PreloadAllModules } from '@angular/router';
import { MainComponent } from './containers/main.component';
import { DetailComponent } from './containers/detail.component';

const Paths: Routes = [
    { path: '', redirectTo: 'main', pathMatch: 'full' },
    { path: 'main', component: MainComponent },
    { path: 'detail', component: DetailComponent }
];

@NgModule({
    imports: [RouterModule.forRoot(Paths)],
    exports: [RouterModule]
})
export class AppRoutingModule { }
