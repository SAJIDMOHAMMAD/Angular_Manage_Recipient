import { Component } from '@angular/core';
import { Recipient } from './Recipient';
import { RecipientService } from './recipient.service';                                                                         
@Component({
  selector: 'add-recipient',
  templateUrl: './add-recipient.component.html',
})
export class AddRecipientComponent  {
  
  addedRecipient:Recipient = new Recipient();
  
  constructor(private recipientService: RecipientService) {
    // this.recipientService.addedRecipient=this.addedRecipient;
   this.addedRecipient.bank="Scotiabank";
   }
 loadRecipient(){
   console.log(this.addedRecipient);
   this.recipientService.setSelectedRecipient(this.addedRecipient);

 }
}