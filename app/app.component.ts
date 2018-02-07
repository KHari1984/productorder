import {Component} from '@angular/core';

@Component({
selector:'edu-app',
template:`<div>
           
            <div class="row">            
            <edu-product></edu-product>            
            </div>

            <div class="row">           
            <edu-order></edu-order>
            </div>

            <div class="row">
            <edu-robot></edu-robot>
            </div>
            
</div>`
})

export class appComponent{
    

}