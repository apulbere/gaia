import { Component, OnInit } from '@angular/core';

import { Quote } from '../_models/index';
import { QuoteService } from '../_services/index';

@Component({
    moduleId: module.id,
    templateUrl: 'home.component.html'
})

export class HomeComponent implements OnInit {
    quotes: Quote[] = [];

    constructor(private quoteService: QuoteService) {}

    ngOnInit() {
        this.loadAllQuotes();
    }

    private loadAllQuotes() {
        this.quoteService.getAll().subscribe(pageable => { this.quotes = pageable.content; });
    }
}
