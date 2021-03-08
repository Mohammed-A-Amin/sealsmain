import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AddJournalComponent } from './add-journal/add-journal.component';
import { RemoveJournalComponent } from './remove-journal/remove-journal.component';
import { AllJournalsComponent } from './all-journals/all-journals.component';

@NgModule({
  declarations: [
    AppComponent,
    AddJournalComponent,
    RemoveJournalComponent,
    AllJournalsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
