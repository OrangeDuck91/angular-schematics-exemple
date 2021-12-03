import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { <%= classify(name) %> } from './model/<%= dasherize(name) %>.model';
import { <%= classify(name) %>Service } from './service/<%= dasherize(name) %>.service';

@Component({
    selector: 'app-<%= dasherize(name) %>s',
    templateUrl: './<%= dasherize(name) %>s.container.html',
    styleUrls: ['./<%= dasherize(name) %>s.container.css']
})
export class <%= classify(name) %>sComponent implements OnInit {

    public <%= camelize(name) %>s: Observable<<%= classify(name) %>[]>;

    constructor(
        private <%= camelize(name) %>Service: <%= classify(name) %>Service,
        private router: Router
    ) { }

    ngOnInit(): void {
        this.<%= camelize(name) %>s = this.<%= camelize(name) %>Service.getAll<%= classify(name) %>s();
    }


    goToDetail(row: <%= classify(name) %>) {
        console.log('row', row);
        this.router.navigate([`<%= classify(name) %>s/${row.id}`])
    }

}
