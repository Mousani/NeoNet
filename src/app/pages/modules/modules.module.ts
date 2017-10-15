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
  ],
  providers: [
    ContactsService,
    CostingService,
  ]
})
export class ModulesModule {
}
