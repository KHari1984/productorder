"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var platform_browser_1 = require("@angular/platform-browser");
var forms_1 = require("@angular/forms");
var app_component_1 = require("./app.component");
var robot_component_1 = require("./robot.component");
var product_filter_pipe_1 = require("./product/product-filter.pipe");
var product_component_1 = require("./product/product.component");
var star_componet_1 = require("./shared/star.componet");
var Orders_Component_1 = require("./Orders/Orders.Component");
var Order_filter_1 = require("./Orders/Order-filter");
var product_service_1 = require("./product/product-service");
var http_1 = require("@angular/http");
var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        core_1.NgModule({
            imports: [
                platform_browser_1.BrowserModule,
                forms_1.FormsModule, http_1.HttpModule
            ],
            declarations: [
                app_component_1.appComponent,
                robot_component_1.robotComponent,
                product_component_1.ProductComponent,
                product_filter_pipe_1.ProductFilter,
                Order_filter_1.OrderFilter,
                star_componet_1.StarComponent,
                Orders_Component_1.OrderComponent
            ],
            providers: [product_service_1.ProductService],
            bootstrap: [
                app_component_1.appComponent
            ]
        })
    ], AppModule);
    return AppModule;
}());
exports.AppModule = AppModule;
//# sourceMappingURL=app.module.js.map