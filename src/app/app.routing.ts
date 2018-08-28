import { NgModule } from '@angular/core';
import { RouterModule, Routes, PreloadAllModules } from '@angular/router';

// ROUTING
export const AppRoutes = {
    MAIN: 'main',
};

const Paths: Routes = [
    { path: '', redirectTo: 'main', pathMatch: 'full' },
    { path: 'main', loadChildren: './main/main.module#MainModule' }
];

@NgModule({
    imports: [RouterModule.forRoot(Paths)],
    exports: [RouterModule]
})
export class AppRoutingModule { }
