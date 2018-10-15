import { Component } from '@angular/core';
import { Recipient } from './Recipient';
import { RecipientService } from './recipient.service';   
import { Recipients } from './recipient-helper';

@Component({
  selector: 'confirm-add-recipient',
  templateUrl: './confirm-add-recipient.html',
  providers:[]
})
export class ConfirmAddRecipientComponent  {
  selectedRecipient:Recipient;
  recipientList:Recipient;
 constructor(private recipientService: RecipientService) {
  console.log("ConfirmAddRecipientComponent"+recipientService.getSelectedRecipient().accountNumber);
  this.selectedRecipient=recipientService.getSelectedRecipient();
 }
 confirmAddRecipient(){
   console.log("confirmAddRecipientComponent---------"+this.selectedRecipient.accountNumber);
Recipients.push(this.selectedRecipient);

 }
}