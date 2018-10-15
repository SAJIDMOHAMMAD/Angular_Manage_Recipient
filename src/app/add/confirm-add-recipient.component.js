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
var recipient_service_1 = require("./recipient.service");
var recipient_helper_1 = require("./recipient-helper");
var ConfirmAddRecipientComponent = (function () {
    function ConfirmAddRecipientComponent(recipientService) {
        this.recipientService = recipientService;
        console.log("ConfirmAddRecipientComponent" + recipientService.getSelectedRecipient().accountNumber);
        this.selectedRecipient = recipientService.getSelectedRecipient();
    }
    ConfirmAddRecipientComponent.prototype.confirmAddRecipient = function () {
        console.log("confirmAddRecipientComponent---------" + this.selectedRecipient.accountNumber);
        recipient_helper_1.Recipients.push(this.selectedRecipient);
    };
    return ConfirmAddRecipientComponent;
}());
ConfirmAddRecipientComponent = __decorate([
    core_1.Component({
        selector: 'confirm-add-recipient',
        templateUrl: './confirm-add-recipient.html',
        providers: []
    }),
    __metadata("design:paramtypes", [recipient_service_1.RecipientService])
], ConfirmAddRecipientComponent);
exports.ConfirmAddRecipientComponent = ConfirmAddRecipientComponent;
//# sourceMappingURL=confirm-add-recipient.component.js.map