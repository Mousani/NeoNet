import { Routes, RouterModule } from '@angular/router';

import { Modules } from './modules.component';
import { Contacts } from './components/contacts/contacts.component';
import { Costing } from './components/costing/costing.component';

// noinspection TypeScriptValidateTypes
const routes: Routes = [
  {
    path: '',
    component: Modules,
    children: [
      { path: 'contacts', component: Contacts },
      { path: 'costing', component: Costing },
    ]
  }
];

export const routing = RouterModule.forChild(routes);
