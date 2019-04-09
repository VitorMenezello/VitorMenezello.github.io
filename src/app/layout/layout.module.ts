import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {RouterModule} from '@angular/router';
import {LayourComponent} from './layout.component';
import {HeaderModule} from './header/header.module';

@NgModule({
    declarations: [
        LayourComponent
    ],
    imports     : [
        CommonModule,
        RouterModule,
        HeaderModule,
    ],
    exports     : [
        LayourComponent
    ]
})
export class LayoutModule { }
