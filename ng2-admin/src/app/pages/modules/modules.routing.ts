import { Routes, RouterModule } from '@angular/router';

import { Modules } from './modules.component';
import { Contacts } from './components/contacts/contacts.component';

// noinspection TypeScriptValidateTypes
const routes: Routes = [
  {
    path: '',
    component: Modules,
    children: [
      { path: 'contacts', component: Contacts },
    ]
  }
];

export const routing = RouterModule.forChild(routes);
