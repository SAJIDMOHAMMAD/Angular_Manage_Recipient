"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require("@angular/core");
var recipient_service_1 = require("./../add/recipient.service");
var ManageRecipientComponent = (function () {
    function ManageRecipientComponent(recipientService) {
        this.recipientService = recipientService;
        this.recipientsList = [];
    }
    ManageRecipientComponent.prototype.loadRecipients = function () {
        this.recipientsList = this.recipientService.getRecipients();
    };
    ManageRecipientComponent.prototype.ngOnInit = function () {
        this.loadRecipients();
    };
    return ManageRecipientComponent;
}());
ManageRecipientComponent = __decorate([
    core_1.Component({
        selector: 'manage-recipient',
        templateUrl: './manage-recipient.component.html',
    }),
    __metadata("design:paramtypes", [recipient_service_1.RecipientService])
], ManageRecipientComponent);
exports.ManageRecipientComponent = ManageRecipientComponent;
//# sourceMappingURL=managerecipient.component.js.map