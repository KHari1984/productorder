import {Pipe,PipeTransform} from '@angular/core';
import { IOrder } from './Orders';
@Pipe({
name:'orderFilter'
})
export class OrderFilter implements PipeTransform {
    transform(value: IOrder[], filterBy: string): IOrder[] {
        filterBy = filterBy ? filterBy.toLowerCase() : null;
        return filterBy ? value.filter((Orders: IOrder) =>
            Orders.productName.toLowerCase().indexOf(filterBy) !== -1) : value
    }

}