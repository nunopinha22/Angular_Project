import { Component } from '@angular/core';
import { CatalogService } from './services/catalog';
import { Catalog } from './models/catalog';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';
  private catalog: Catalog;

  constructor(private _catalogService: CatalogService) { }

  public ngOnInit() {
    this._catalogService.getCatalogList()
      .subscribe((data: Catalog) => this.catalog = data,
        error => console.log(error));
  }
}
