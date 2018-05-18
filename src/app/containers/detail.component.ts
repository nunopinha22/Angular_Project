import { Component, OnInit } from '@angular/core';
import { Catalog } from '../models/catalog';
import { CatalogService } from '../services/catalog';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
    selector: 'detail',
    templateUrl: 'detail.component.html',
    styleUrls: ['./detail.component.css']
})

export class DetailComponent implements OnInit {

    private catalogItem: Catalog;

    constructor(
        private _catalogService: CatalogService,
        private router: Router,
        private route: ActivatedRoute) {

    }

    ngOnInit() {
        const code = this.route.snapshot.params['code'];
        
        this._catalogService.getCatalogList()
            .subscribe((data: any) => this.catalogItem = (data.productHierarchy[0].items as Array<any>).find(x => x.code === code),
                error => console.log(error));
    }
}