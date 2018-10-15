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
var Recipient_1 = require("./Recipient");
var recipient_service_1 = require("./recipient.service");
var AddRecipientComponent = (function () {
    function AddRecipientComponent(recipientService) {
        this.recipientService = recipientService;
        this.addedRecipient = new Recipient_1.Recipient();
        // this.recipientService.addedRecipient=this.addedRecipient;
        this.addedRecipient.bank = "Scotiabank";
    }
    AddRecipientComponent.prototype.loadRecipient = function () {
        console.log(this.addedRecipient);
        this.recipientService.setSelectedRecipient(this.addedRecipient);
    };
    return AddRecipientComponent;
}());
AddRecipientComponent = __decorate([
    core_1.Component({
        selector: 'add-recipient',
        templateUrl: './add-recipient.component.html',
    }),
    __metadata("design:paramtypes", [recipient_service_1.RecipientService])
], AddRecipientComponent);
exports.AddRecipientComponent = AddRecipientComponent;
//# sourceMappingURL=add-recipient.component.js.map