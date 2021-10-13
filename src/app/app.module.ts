import { FormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { MessageService } from 'primeng/api';
import { ToastModule } from 'primeng/toast';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CoreModule } from './core/core.module';
import { PersonsModule } from './persons/persons.module';
import { EntriesModule } from './entries/entries.module';
import { EntryService } from './entries/entry.service';
import { PersonService } from './persons/person.service';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
    AppRoutingModule,
    HttpClientModule,

    ToastModule,

    CoreModule,
    EntriesModule,
    PersonsModule
  ],
  providers: [MessageService, EntryService, PersonService],
  bootstrap: [AppComponent]
})
export class AppModule { }
