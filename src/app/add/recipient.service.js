"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var core_1 = require("@angular/core");
var recipient_helper_1 = require("./recipient-helper");
var RecipientService = (function () {
    function RecipientService() {
    }
    RecipientService.prototype.getRecipients = function () {
        return recipient_helper_1.Recipients;
    };
    RecipientService.prototype.setSelectedRecipient = function (recipient) {
        this.addedRecipient = recipient;
        console.log("setselectedRecipient :: " + this.addedRecipient.accountNumber);
    };
    RecipientService.prototype.getSelectedRecipient = function () {
        console.log("getSelectedRecipient" + this.addedRecipient.accountNumber);
        return this.addedRecipient;
    };
    return RecipientService;
}());
RecipientService = __decorate([
    core_1.Injectable()
], RecipientService);
exports.RecipientService = RecipientService;
//# sourceMappingURL=recipient.service.js.map