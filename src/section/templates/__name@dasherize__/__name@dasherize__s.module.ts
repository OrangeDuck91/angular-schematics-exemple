import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { <%= classify(name) %>sComponent } from './<%= dasherize(name) %>s.container';
import { HeaderModule } from 'src/app/shared/components/header/header.module';
import { <%= classify(name) %>ListModule } from './<%= dasherize(name) %>-list/<%= dasherize(name) %>-list.module';

@NgModule({
    declarations: [
        <%= classify(name) %>sComponent
    ],
    imports: [
        CommonModule,
        HeaderModule,
        <%= classify(name) %>ListModule
    ]
})
export class <%= classify(name) %>sModule { }
