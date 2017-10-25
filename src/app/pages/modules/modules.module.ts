import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { NgaModule } from '../../theme/nga.module';
import { Ng2SmartTableModule } from 'ng2-smart-table';
import { DataTableModule } from 'angular2-datatable';
import { HttpModule } from '@angular/http';
import { DataFilterPipe } from './components/contacts/data-filter.pipe';
import { HotTable, HotTableModule } from 'ng2-handsontable';

import { routing } from './modules.routing';
import { Modules } from './modules.component';

import { Contacts } from './components/contacts/contacts.component';
import { ContactsService } from './components/contacts/contacts.service';

import { Costing } from './components/costing/costing.component';
import { CostingService } from './components/costing/costing.service';

import { InlineForm } from './components/contacts/components/inlineForm';

import { ViewContact } from './components/contacts/components/viewContact';
import { ViewAddress } from './components/contacts/components/viewAddress';

import { KeysPipe } from './components/contacts/components/viewContact/keys.pipe';
import { AddressKeysPipe } from './components/contacts/components/editAddress/address-keys.pipe';

import { Invoices } from './components/invoices/invoices.component';
import { InvoicesService } from './components/invoices/invoices.service';

import { EditAddress } from './components/contacts/components/editAddress';



@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    NgaModule,
    routing,
    Ng2SmartTableModule,
    DataTableModule,
    HttpModule,
  ],
  declarations: [
    Modules,
    Contacts,
    Costing,
    DataFilterPipe,
    InlineForm,
    ViewContact,
    ViewAddress,
    KeysPipe,
    Invoices,
    AddressKeysPipe,
    // EditAddress,
  ],
  providers: [
    ContactsService,
    CostingService,
    InvoicesService,
  ],
  // entryComponents: [
  //   EditAddress,
  // ],
})
export class ModulesModule {
}
