import { Component } from '@angular/core';
import { RecipientService } from './../add/recipient.service';
import {Recipient} from './../add/Recipient'

@Component({
  selector: 'manage-recipient',
  templateUrl: './manage-recipient.component.html',
})
export class ManageRecipientComponent  {
  recipientsList:Recipient[] = [];
constructor(private recipientService: RecipientService) { }
loadRecipients():void{
  this.recipientsList= this.recipientService.getRecipients();
 }
 ngOnInit(): void {
        this.loadRecipients();
   }
 }