import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import {  <%= classify(name) %> } from '../model/<%= dasherize(name) %>.model';

const Dummy<%= classify(name) %>s: <%= classify(name) %> [] =[
    {
        id: 'Test',
        name: 'Test'
    }
]

@Injectable({ providedIn: 'root' })
export class <%= classify(name) %>Service {
    constructor() { }

    getAll<%= classify(name) %>s(): Observable < <%= classify(name) %> [] > {
        return of(Dummy<%= classify(name) %>s)
    }

    get<%= classify(name) %>ById(id: string): Observable < <%= classify(name) %> > {
        return of(Dummy<%= classify(name) %>s.find(e => e.id == id));
    }

}