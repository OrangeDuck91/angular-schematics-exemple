import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { <%= classify(name) %> } from '../model/<%= dasherize(name) %>.model';

@Component({
    selector: 'app-<%= dasherize(name) %>-list',
    templateUrl: './<%= dasherize(name) %>-list.component.html',
    styleUrls: ['./<%= dasherize(name) %>-list.component.css']
})
export class <%= classify(name) %>ListComponent {

    @Input()
    <%= camelize(name) %>s: <%= classify(name) %>[];

    @Output()
    <%= camelize(name) %>Selected = new EventEmitter<<%= classify(name) %>>();

    displayedColumns: string[] = ['name'];

    select<%= classify(name) %>(<%= classify(name) %>: <%= classify(name) %>) {
        this.<%= camelize(name) %>Selected.emit(<%= classify(name) %>);
    }

}
