import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { <%= classify(name) %>ListComponent } from './<%= dasherize(name) %>-list.component';
import { MatTableModule } from '@angular/material/table';

@NgModule({
    declarations: [
        <%= classify(name) %>ListComponent
    ],
    imports: [
        CommonModule,
        MatTableModule
    ],
    exports: [
        <%= classify(name) %>ListComponent
    ],
})
export class <%= classify(name) %>ListModule { }
