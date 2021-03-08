import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddJournalComponent } from './add-journal/add-journal.component';
import { RemoveJournalComponent} from './remove-journal/remove-journal.component';
import { AllJournalsComponent } from './all-journals/all-journals.component';
const routes: Routes = [
  { path: 'add', component: AddJournalComponent},
  { path: 'remove', component: RemoveJournalComponent},
  { path: '', component: AllJournalsComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
