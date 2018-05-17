import { Component, OnInit, Pipe, PipeTransform } from '@angular/core';
import { CatalogService } from './services/catalog';
import { Catalog } from './models/catalog';

/**
 * Pipe to filter text inputed by user.
 */
@Pipe({
  name: 'filter'
})
export class FilterPipe implements PipeTransform {
  transform(items: any, filter: any): any {
    if (filter && Array.isArray(items)) {
      return items.filter(x => x.code.toLowerCase().includes(filter.Text.toLowerCase())
        || x.name.toLowerCase().includes(filter.Text.toLowerCase())
        || x.description.toLowerCase().includes(filter.Text.toLowerCase()));
    } else {
      return items;
    }
  }
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent implements OnInit {
  title = 'app';
  private searchTerm: string = '';
  private catalogList: Catalog[];

  constructor(private _catalogService: CatalogService) { }

  ngOnInit() {
    this._catalogService.getCatalogList()
      .subscribe((data: any) => this.catalogList = data.productHierarchy[0].items,
        error => console.log(error));
  }

  /**
   * Action to set filter value text.
   * @param value
   */
  public searchInCatalogs(value: string): void {
    this.searchTerm = value;
  }
}
