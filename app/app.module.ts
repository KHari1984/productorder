import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {FormsModule} from '@angular/forms';

import {appComponent} from './app.component';
import {robotComponent} from './robot.component';
import {ProductFilter} from './product/product-filter.pipe';
import {ProductComponent} from './product/product.component';
import {StarComponent} from './shared/star.componet';
import {OrderComponent} from './Orders/Orders.Component';
import {OrderFilter} from './Orders/Order-filter';
import {ProductService} from './product/product-service';
import { HttpModule } from '@angular/http';



@NgModule({
    imports:[
        BrowserModule,
        FormsModule,HttpModule
    ],
    declarations:[
        appComponent,
        robotComponent,
        ProductComponent,
        ProductFilter,
        OrderFilter,
        StarComponent,
        OrderComponent
    ],
    providers: [ ProductService ],
    bootstrap:[
        appComponent
    ]
})

export class AppModule{}