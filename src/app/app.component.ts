import { Component, OnInit } from '@angular/core';
import { CatalogService } from './services/catalog';
import { Catalog } from './models/catalog';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent implements OnInit {
  title = 'app';
  private catalog: Catalog[];
  private catalogFilter: Catalog[];   

  constructor(private _catalogService: CatalogService) { }

  ngOnInit() {
    this._catalogService.getCatalogList()
      .subscribe((data: any) => this.catalog = data.productHierarchy[0].items,
        error => console.log(error));
  }

  /**
     * Action to set filter.
     * @param value
     */
  public searchInCatalogs(value: string): void {
    this.catalogFilter = this.catalog;
    this.catalog = this.catalog.filter(x => x.code.toLowerCase().includes(value.toLowerCase()));
    
     console.log('filter', value);
  }
}
