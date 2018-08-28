import { NgModule, CUSTOM_ELEMENTS_SCHEMA, InjectionToken } from '@angular/core';
import { EffectsModule } from '@ngrx/effects';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { Store, ActionReducerMap, StoreModule } from '@ngrx/store';

// COMPONENTS
import { MainComponent, FilterPipe } from './main.component';
import { TableComponent } from './components/table.component';
import { SearchComponent } from './components/search.component';
import { DetailComponent } from './components/modal-note/detail.component'
import { EditableNoteComponent } from './components/modal-note/editable-note.component'


// SERVICES
import { CatalogService } from './services/catalog';

// EFFECTS
import { UserNotesEffects } from './effects/user-notes.effects';
import { reducers, reducerName } from './main.reducers';

// Routing
import { MainRoutingModule } from './main.routing';


@NgModule({
    imports: [
        StoreModule.forFeature(reducerName, reducers),
        MainRoutingModule,
        CommonModule,
        FormsModule,
        ReactiveFormsModule,
        EffectsModule.forFeature([
            UserNotesEffects
        ])

    ],
    declarations: [
        MainComponent,
        TableComponent,
        SearchComponent,
        DetailComponent,
        EditableNoteComponent,
        FilterPipe
    ],
    exports: [
        MainComponent
    ],
    providers: [
        CatalogService,
        FilterPipe
    ],
    schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class MainModule { }