"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var OrderComponent = /** @class */ (function () {
    function OrderComponent() {
        this.pageTitle = '****Orders****';
        this.Orders = [{
                "OrderId": 1,
                "productName": "Leaf Rake",
                "OrderDate": "March 20, 2017",
                "Saleprice": 19.95,
                "Rating": 3.4
            },
            {
                "OrderId": 2,
                "productName": "Leaf Rake",
                "OrderDate": "April 10, 2016",
                "Saleprice": 19.95,
                "Rating": 4.2
            },
            {
                "OrderId": 3,
                "productName": "Garden Cart",
                "OrderDate": "july 19, 2016",
                "Saleprice": 32.99,
                "Rating": 4.7
            }];
    }
    OrderComponent = __decorate([
        core_1.Component({
            selector: 'edu-order',
            templateUrl: 'app/Orders/Orders.Component.html',
            styles: ['thead{color:blue;}', 'td{color:green;}']
        })
    ], OrderComponent);
    return OrderComponent;
}());
exports.OrderComponent = OrderComponent;
//# sourceMappingURL=Orders.Component.js.map