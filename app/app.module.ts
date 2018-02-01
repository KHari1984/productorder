import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {appComponent} from './app.component';
import {robotComponent} from './robot.component';
import {ProductComponent} from './product/product.component';
import {OrderComponent} from './Orders/Orders.Component';


@NgModule({
 imports:[BrowserModule],
 declarations:[appComponent,robotComponent,ProductComponent,OrderComponent],
 bootstrap:[appComponent]
})

export class AppModule{}