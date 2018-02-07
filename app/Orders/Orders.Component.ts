import { Component } from '@angular/core';

@Component({
    selector: 'edu-order',
    templateUrl: 'app/Orders/Orders.Component.html',
    styles:['thead{color:blue;}','td{color:green;}']
})
export class OrderComponent {
    pageTitle: string = '****Orders****'
    filterText:string;
    Orders: any[] = [{
        "OrderId": 1,
        "productName": "Leaf Rake",
        "OrderDate": "March 20, 2017",
        "Saleprice": 19.95,
        "Rating":3.4
    },
    {
        "OrderId": 2,
        "productName": "Leaf Rake",
        "OrderDate": "April 10, 2016",
        "Saleprice": 19.95,
        "Rating":4.2
    },
    {
        "OrderId": 3,
        "productName": "Garden Cart",
        "OrderDate": "july 19, 2016",
        "Saleprice": 32.99,
        "Rating":4.7
    }]
}