import {NgModule} from '@angular/core';
import {RouterModule} from '@angular/router';
import {CommonModule} from '@angular/common';
import {MatButtonModule, MatIconModule} from '@angular/material';

import {HeaderComponent} from './header.component';

@NgModule({
    declarations: [
        HeaderComponent
    ],
    imports: [
        RouterModule,
        CommonModule,
        MatButtonModule,
        MatIconModule,
    ],
    exports: [
        HeaderComponent
    ]
})
export class HeaderModule { }
