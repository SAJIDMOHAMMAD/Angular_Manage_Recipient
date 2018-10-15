import { Injectable } from '@angular/core';
import { Recipient } from './Recipient';
import { Recipients } from './recipient-helper';

@Injectable()
export class RecipientService {
    addedRecipient:Recipient;
    getRecipients(): Recipient[] {
	    return Recipients;
    }

    setSelectedRecipient(recipient:Recipient):void{
        this.addedRecipient=recipient;
        console.log("setselectedRecipient :: "+this.addedRecipient.accountNumber);
    }
    
    getSelectedRecipient():Recipient{
        console.log("getSelectedRecipient"+this.addedRecipient.accountNumber);
        return this.addedRecipient;
    }
    
}