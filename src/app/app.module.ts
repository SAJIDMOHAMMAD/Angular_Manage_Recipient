import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {ManageRecipientComponent} from './manage-recipient/managerecipient.component';
import {AddRecipientComponent} from './add/add-recipient.component';
import {ConfirmAddRecipientComponent} from './add/confirm-add-recipient.component';
import { AppRoutingModule }  from './app-routing.module';
import { AppComponent }  from './app.component';
import { FormsModule } from '@angular/forms';
import { RecipientService } from './add/recipient.service';
import {EditRecipientComponent} from './edit/edit-recipient.component';

@NgModule({
  imports:      [ BrowserModule ,AppRoutingModule, FormsModule],
  declarations: [ AppComponent, ManageRecipientComponent, AddRecipientComponent ,ConfirmAddRecipientComponent,EditRecipientComponent],
  bootstrap:    [ AppComponent ],
  providers: [RecipientService]
})
export class AppModule { }
