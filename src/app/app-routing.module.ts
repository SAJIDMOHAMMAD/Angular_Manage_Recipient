import { NgModule }      from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {AddRecipientComponent} from './add/add-recipient.component';
import {ConfirmAddRecipientComponent} from './add/confirm-add-recipient.component';
import {ManageRecipientComponent} from './manage-recipient/managerecipient.component';
import {EditRecipientComponent} from './edit/edit-recipient.component';

const routes: Routes = [
    {path:'',component:ManageRecipientComponent},	
    {path:'enter-add',component:AddRecipientComponent},
    {path:'confirm-add',component:ConfirmAddRecipientComponent},
    {path:'edit',component:EditRecipientComponent}
];


@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule{ } 