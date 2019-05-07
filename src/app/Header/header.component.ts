import { Component, OnInit, Output } from '@angular/core';
import { EventEmitter } from '@angular/core';

@Component({
    selector: 'app-header',
    templateUrl: './header.component.html',
    styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
    @Output() filterName = new EventEmitter<string>();
    constructor() { }

    ngOnInit() {
    }

    OnClickValue(event: Event) {
        this.filterName.emit((<HTMLElement>(event.target)).innerText);
    }
}