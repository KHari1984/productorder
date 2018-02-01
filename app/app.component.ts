import {Component} from '@angular/core';

@Component({
selector:'edu-app',
template:`<div>
            <div class="row">
            <div class="col-md-8">
            <h1>Avialble Products</h1>
            <edu-product></edu-product>
            </div>
            </div>
            <div class="row">
            <div class="col-md-6">
            <h1>Orders</h1>
            <edu-order></edu-order>
            </div>
            <div class="col-md-6">
            <edu-robot></edu-robot>
            </div>
            </div>
</div>`
})

export class appComponent{

}