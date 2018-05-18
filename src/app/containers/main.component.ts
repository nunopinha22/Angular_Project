import { Component, OnInit, Pipe, PipeTransform } from '@angular/core';
import { Catalog } from '../models/catalog';
import { CatalogService } from '../services/catalog';
import { Router, ActivatedRoute } from '@angular/router';

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
    selector: 'main',
    templateUrl: 'main.component.html',
    styleUrls: ['./main.component.css']
})

export class MainComponent implements OnInit {
    title = 'app';
    private searchTerm: string = '';
    private catalogList: Catalog[];

    constructor(
        private _catalogService: CatalogService,
        private router: Router,
        private route: ActivatedRoute) { }

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

    /**
     * Action to selected object.
     * @param obj
     */
    public detail(obj: Catalog): void {
        this.router.navigate(['../detail', obj.code], { relativeTo: this.route });
    }
}