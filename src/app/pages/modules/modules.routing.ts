import { Routes, RouterModule } from '@angular/router';

import { Modules } from './modules.component';
import { Contacts } from './components/contacts/contacts.component';
import { Costing } from './components/costing/costing.component';
import { Invoices } from './components/invoices/invoices.component';
import { Modals } from '../../theme/components/modals/modals.component';
// noinspection TypeScriptValidateTypes
const routes: Routes = [
  {
    path: '',
    component: Modules,
    children: [
      { path: 'contacts', component: Contacts },
      { path: 'costing', component: Costing },
      { path: 'invoices', component: Invoices },
    ]
  }
];

export const routing = RouterModule.forChild(routes);
